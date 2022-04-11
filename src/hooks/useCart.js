import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [orderCart, setOrderCart] = useState([]);
  useEffect(() => {
    const storedProduct = getStoredCart();
    const savedCart = [];
    for (const id in storedProduct) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedProduct[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setOrderCart(savedCart);
  }, [products]);

  return [orderCart, setOrderCart];
};
export default useCart;
