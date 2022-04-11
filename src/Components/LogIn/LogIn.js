import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const submitButton = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitButton} action="">
        <div className="user-form">
          <div className="email">
            <label htmlFor="email">Your Email*</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="someone@exmaple.com"
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">Your password*</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
          </div>

          <Link className="switch-user" to="/signup">Create new account?</Link>
          <button
            className="submit-button"
            onClick={submitButton}
            type="submit"
          >
            Log In
          </button>

          <div className="line">
            <div className="line-1"></div>
            <p>or</p>
            <div className="line-2"></div>
          </div>

          <button className="submit-button">Continue with Google</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
