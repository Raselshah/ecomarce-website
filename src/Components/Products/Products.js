import { useNavigate } from "react-router-dom";
import LoadProducts from "../../hooks/ProductsData";
import useCart from "../../hooks/useCart";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import OrdersCart from "../OrdersCart/OrdersCart";
import SetProducts from "../SetProducts/SetProducts";
import "./Products.css";
const Products = () => {
  const [products] = LoadProducts();
  const navigate = useNavigate();

  const counterOrderButton = (selectedProducts) => {
    let newCart = [];
    const exists = orderCart.find((pd) => pd.id === selectedProducts.id);
    if (!exists) {
      selectedProducts.quantity = 1;
      newCart = [...orderCart, selectedProducts];
    } else {
      const rest = orderCart.filter((pd) => pd.id !== selectedProducts.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setOrderCart(newCart);
    addToDb(selectedProducts.id);
  };

  const [orderCart, setOrderCart] = useCart(products);

  const removeCart = (products) => {
    setOrderCart([]);
    for (const product of products) {
      removeFromDb(product.id);
    }
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
          <button onClick={() => removeCart(products)} className="clear-button">
            Clear Cart
          </button>
          <button onClick={() => navigate("/order")} className="review-button">
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
