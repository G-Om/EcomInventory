import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Components/Scripts/firebase';  // Adjust the path based on your project structure
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UserRequests } from '../api/UserRequests.js';

export const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      
      var data = {
        email:email,
        password:password,
        name:name,
      } 
      UserRequests.registerUser(data);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <div className="form-content">
        <div className="top-buttons">
          <div className="sign-up-button">
            <button className="signup-btn" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
          <div className="login-button">
            <button className="login-btn" onClick={toggleForm}>
              Login
            </button>
          </div>
        </div>

        {showSignup ? (
          <div className="signup-form">
            <form onSubmit={handleSignup}>
              <label className="signup-header">Sign up</label>
              <input type="text" placeholder="Full Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Set a password" name="password" autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" value="Sign Up" />
              <a href="#" onClick={toggleForm}>Already Have An Account</a>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label className="login-header">Login</label>
              <input type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Set a password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" value="Login" />
              <a href="#" onClick={toggleForm}>Create New Account</a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
