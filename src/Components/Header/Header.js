import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="menu-container">
      <div className="logo">
        <h2>Ema-Jhon</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
      </div>
    </div>
  );
};

export default Header;
