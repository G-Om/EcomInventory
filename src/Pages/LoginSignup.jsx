import React, { useState } from 'react';
 

export const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(true); // State to track which form to show

  const toggleForm = () => {
    setShowSignup(!showSignup);
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
             
                    <form action="#">
                        <label className="signup-header">Sign up</label>
                        <input type="text" placeholder="Full Name" name="Name"/>
                        <input type="email" placeholder="Your Email" name="email"/>
                        <input type="password" placeholder="Set a password" name="password" autoComplete='false'/>
                        <input type="submit" value="Sign Up"></input>
                        <a href="#">Already Have An Account</a>
                    </form>
            </div>
         
        ) : (
          <div className="login-form">
            <form action="#">
                        <label className="login-header">Login</label>
                         <input type="email" placeholder="Your Email" name="email"/>
                        <input type="password" placeholder="Set a password" name="password"/>
                        <input type="submit" value="Login"></input>
                        <a href="#">Create New Account</a>
                    </form>
          </div>
        )}
      </div>
    </div>
  );
};