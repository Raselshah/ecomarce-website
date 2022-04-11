import React from "react";

const OrdersCart = ({ orderCart }) => {
  let quantity = 0;
  let total = 0;
  let shippingCharge = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const product of orderCart) {
    quantity = quantity + product.quantity;
    total = parseFloat(total + product.price * product.quantity);
    shippingCharge = parseFloat(shippingCharge + product.shipping);
  }
  tax = parseFloat((0.1 * total).toFixed(2));
  grandTotal = total + shippingCharge + tax;
  return (
    <div>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge: $ {shippingCharge}</p>
      <p>Tax: $ {tax}</p>
      <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default OrdersCart;
