import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import BookCard from './BookCard'; // Assuming you have a BookCard component to render individual books
import API from './api'; // Assuming you have a module to handle API requests


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`API_URL?page=${page}&limit=10`); // Replace API_URL with your actual API endpoint
      const newBooks = response.data;

      setBooks((prevBooks) => [...prevBooks, ...newBooks]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newBooks.length > 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <InfiniteScroll
        dataLength={books.length}
        next={fetchBooks}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more books to load.</p>}
      >
        {books.map((book) => (
          <div key={book.id}>
            {/* Render book information */}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
