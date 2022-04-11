import LoadProducts from "../../hooks/ProductsData";
import useCart from "../../hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import OrdersCart from "../OrdersCart/OrdersCart";
import ReviewOrder from "../ReviewOrder/ReviewOrder";
import "./OrderReview.css";

const OrdersReview = () => {
  const [products] = LoadProducts();

  const [cart, setCart] = useCart(products);

  const handleRemoveCart = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const removeCart = (products) => {
    setCart([]);
    for (const product of products) {
      removeFromDb(product.id);
    }
  };
  return (
    <div className="products-container">
      <div className="review-product">
        {cart.map((product) => (
          <ReviewOrder
            handleRemoveCart={handleRemoveCart}
            key={product.id}
            product={product}
          ></ReviewOrder>
        ))}
      </div>
      <div className="order-info">
        <h2 className="order-summary">Order Summary</h2>

        <div className="orders">
          <OrdersCart orderCart={cart}></OrdersCart>
        </div>

        <div className="order-button">
          <button onClick={() => removeCart(cart)} className="clear-button">
            Clear Cart
          </button>
          <button className="review-button">Proceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersReview;
