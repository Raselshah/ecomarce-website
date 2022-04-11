import React from "react";
import "./ReviewOrder.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const ReviewOrder = ({ product, handleRemoveCart }) => {
  const { img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div className="item">
        <img className="review-photo" src={img} alt="" />
        <div className="item-info">
          <h4 className="review-title">{name}</h4>
          <p className="review-price">
            Price: <span>${price}</span>
          </p>
          <p className="review-shipping">
            Shipping Charge : <span>${shipping}</span>
          </p>
          <p className="review-quantity">quantity :{quantity}</p>
        </div>
      </div>
      <button
        onClick={() => handleRemoveCart(product)}
        className="remove-button"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default ReviewOrder;
