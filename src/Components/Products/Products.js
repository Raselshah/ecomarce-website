import { useState } from "react";
import LoadProducts from "../../hooks/ProductsData";
import SetProducts from "../SetProducts/SetProducts";
import "./Products.css";
const Products = () => {
  const [products] = LoadProducts();
  const [orderCart, setOrderCart] = useState([]);

  const counterOrderButton = (products) => {
    const newCart = [...orderCart, products];
    setOrderCart(newCart);
  };

  const removeCart = () => {
    setOrderCart([]);
  };
  console.log(orderCart);
  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <SetProducts
            key={product.id}
            counterOrderButton={counterOrderButton}
            product={product}
          ></SetProducts>
        ))}
      </div>
      <div className="order-info">
        <h2 className="order-summary">Order Summary</h2>

        <div className="orders">
          <p>Selected Items: {orderCart.length}</p>
          <p>Total Price: </p>
          <p>Total Shipping Charge: </p>
          <p>Tax: </p>
          <p>Grand Total: </p>
        </div>

        <div className="order-button">
          <button onClick={removeCart} className="clear-button">
            Clear Cart
          </button>
          <button className="review-button">Review Order</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
