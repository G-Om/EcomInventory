import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(true);
  const redirect = useNavigate();
  const userLoggedIn = false;

  const hardcodedEmail = "mayurpanchal@gmail.com";
  const hardcodedPassword = "mayur123";
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
  };

  const handleLoginSubmit = (event) => {
    localStorage.setItem("email", hardcodedEmail);
    localStorage.setItem("password", hardcodedPassword);
    event.preventDefault();
    if (loginEmail === hardcodedEmail && loginPassword === hardcodedPassword) {
      localStorage.setItem("userId", 2);
      redirect("/");
    } else {
      alert("Invalid email or password");
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

        {/* Conditionally render the signup or login form */}
        {showSignup ? (
          <div className="signup-form">
            <form onSubmit={handleSignupSubmit}>
              <label className="signup-header">Sign up</label>
              <input type="text" placeholder="Full Name" name="Name" />
              <input type="email" placeholder="Your Email" name="email" />
              <input type="password" placeholder="Set a password" name="password" autoComplete="false" />
              <input type="submit" value="Sign Up" />
              <a href="#" onClick={toggleForm}>Already Have An Account</a>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <label className="login-header">Login</label>
              <input 
                type="email" 
                placeholder="Your Email" 
                name="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Set a password" 
                name="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <input type="submit" value="Login" />
              <a href="#" onClick={toggleForm}>Create New Account</a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
