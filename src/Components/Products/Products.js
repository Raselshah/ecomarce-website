import { useState } from "react";
import LoadProducts from "../../hooks/ProductsData";
import { addToDb } from "../../utilities/fakedb";
import OrdersCart from "../OrdersCart/OrdersCart";
import SetProducts from "../SetProducts/SetProducts";
import "./Products.css";
const Products = () => {
  const [products] = LoadProducts();
  const [orderCart, setOrderCart] = useState([]);

  const counterOrderButton = (products) => {
    const newCart = [...orderCart, products];
    setOrderCart(newCart);
    addToDb(products.id);
  };
  console.log(orderCart);

  const removeCart = () => {
    setOrderCart([]);
  };
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
          <OrdersCart orderCart={orderCart}></OrdersCart>
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
