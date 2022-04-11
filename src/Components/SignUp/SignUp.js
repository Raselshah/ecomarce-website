import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleUserName = (event) => {
    setName(event.target.value);
  };

  const handleUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUserPassword = (event) => {
    setPassword(event.target.value);
  };

  const [createUserWithEmailAndPassword, loading, user] =
    useCreateUserWithEmailAndPassword(auth);

  const signUpButton = (event) => {
    event.preventDefault();
    if (!email) {
      setError("please enter your email");
      return;
    }
    if (!password) {
      setError("please enter a password");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 character");
      return;
    }
    setError("");
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification(user);
  };

  if (user) {
    navigate("/products");
  }
  return (
    <div>
      <form onSubmit={signUpButton}>
        <div className="user-form">
          <div className="email">
            <label htmlFor="name">Your Name*</label>
            <input
              onBlur={handleUserName}
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
              onBlur={handleUserEmail}
              type="email"
              name="email"
              id=""
              placeholder="someone@exmaple.com"
              required
            />
            <p style={{ padding: "0", margin: "0", color: "lightcoral" }}>
              {error}
            </p>
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
            <p style={{ padding: "0", margin: "0", color: "lightcoral" }}>
              {error}
            </p>
          </div>

          <Link className="switch-user" to="/login">
            Already have an account?
          </Link>
          <button
            onClick={signUpButton}
            className="submit-button"
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

export default SignUp;
