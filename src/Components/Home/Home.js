import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="content-area">
        <p>
          <small className="offer">Sale up to 70% off</small>
        </p>

        <div className="info">
          <h2 className="content-title">New Collection For Fall</h2>
          <p className="content-info">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>

        <button
          onClick={() => navigate("/products")}
          className="content-button"
        >
          SHOP NOW
        </button>
      </div>
      <div className="content-photo">
        <img
          src={
            "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="man fashion"
        />
      </div>
    </div>
  );
};

export default Home;
