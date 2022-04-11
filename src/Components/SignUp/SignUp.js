import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <form action="">
        <div className="user-form">
          <div className="email">
            <label htmlFor="name">Your Name*</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Type your name"
              required
            />
          </div>
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

          <Link className="switch-user" to="/login">Already have an account?</Link>
          <button className="submit-button" type="submit">
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

export default SignUp;
