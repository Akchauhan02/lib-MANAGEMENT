import React, { useState } from 'react';
import './styles.css';
import Signup from './Signup';
import Login from './Login';
// import BookList from './BookList';

const LoadingAnimation = () => {
    return (
        <div className="loading-animation">
            <div className="spinner"></div>
        </div>
    );
};


const LibraryManagementPage = () => {

    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowSignup(false);
        setShowLogin(true);
    };

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="container">
            {isLoading ? (
                <LoadingAnimation />
            ) : (
                <div>
                    <header className="header">
                        <h1>Library Management System</h1>

                        <div className="header-links">
                            <button onClick={handleSignupClick}>Sign Up</button>
                            <button onClick={handleLoginClick}>Log In</button>
                        </div>
                    </header>
                    {/* Render Signup or Login components based on user interactions */}

                    {showSignup && <Signup />}
                    {showLogin && <Login />}

                    <nav className="navbar">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/books">Books</a>
                            </li>
                            <li>
                                <a href="/search">Search</a>
                            </li>
                            <li>
                                <a href="/cart">Cart</a>
                            </li>
                        </ul>
                    </nav>

                    <main className="main-content">
                        <h2>Welcome to the Library Management System!</h2>
                        {/* Add the rest of your main content here */}
                    </main>

                    {/* <div>
      Other components and content
      <BookList />
    </div> */}

                    <footer className="footer">
                        <p>&copy; 2023 Library Management System. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default LibraryManagementPage;
