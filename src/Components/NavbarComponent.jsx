import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Scripts/firebase';  // Adjust the path based on your project structure

export const NavbarComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');  // Use navigate to redirect to the home page
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul id="hero">
            <li>
              <Link to="/">BUY T-SHIRTS</Link>
            </li>
            <li>
              <Link to="/women">WOMEN</Link>
            </li>
            <li>
              <Link to="/men">MEN</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            {user && (
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
            )}
          </ul>
        </nav>
        <div id="logo">
          <Link to="/">  
            <img src="./images/logo-regular.png" alt="logo" />
          </Link>
        </div>
        <div id="cart-logo">
          {user ? (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
        </div>
      </header>
    </div>
  );
};
