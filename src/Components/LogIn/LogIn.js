import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const handleUserEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleUserPassword = (event) => {
    setPassword(event.target.value);
  };
  const submitButton = (event) => {
    event.preventDefault();
    if (!email) {
      setError("please enter your email");
      return;
    }
    setError("");

    if (!password) {
      setError("please enter your password");
      return;
    }
    setError("");

    signInWithEmailAndPassword(email, password);
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <form onSubmit={submitButton} action="">
        <div className="user-form">
          <div className="email">
            <label htmlFor="email">Your Email*</label>
            <input
              onBlur={handleUserEmail}
              type="email"
              name="email"
              id=""
              placeholder="someone@exmaple.com"
              required
            />
            <p style={{ color: "red" }}>{error}</p>
          </div>
          <div className="password">
            <label htmlFor="password">Your password*</label>
            <input
              onBlur={handleUserPassword}
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
            <p style={{ color: "red" }}>{error}</p>
            {loading && <p>Loading...</p>}
          </div>

          <Link className="switch-user" to="/signup">
            Create new account?
          </Link>
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
