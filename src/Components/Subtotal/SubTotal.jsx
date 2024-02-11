import React from "react";
import "./SubTotal.css";
import { contextValue } from "../Context/StateProvider";
import { getCartTotal } from "../Context/Reducer";
const SubTotal = () => {
  const [{ cart }, dispatch] = contextValue();
  const subtotalValue = getCartTotal(cart).toFixed(2);
  const formattedSubtotal = `₹${subtotalValue}`;
  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong>{formattedSubtotal}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" name="" id="" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
