import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="menu-container">
      <div className="logo">
        <h2>Ema-Jhon</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
        <Link to="order">Order</Link>
        {user ? (
          <button onClick={logOut}>Sign Out</button>
        ) : (
          <Link to="login">Log In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
