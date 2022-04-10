import React from "react";
import "./SetProducts.css";

const SetProducts = ({ product, counterOrderButton }) => {
  const {  name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <div className="product-info">
        <div className="photo">
          <img src={img} alt="" />
        </div>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">Price : ${price}</p>

        <p className="product-seller">
          <small>Manufacturer : {seller}</small>
        </p>
        <p className="product-rating">
          <small>Rating : {ratings}</small>
        </p>
      </div>
      <button onClick={() => counterOrderButton(product)} className="product-button">
        Add to Cart
      </button>
    </div>
  );
};

export default SetProducts;
