import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { contextValue } from "../Context/StateProvider";
import { getCartTotal } from "../Context/Reducer";
const SubTotal = () => {
  const [{ cart }, dispatch] = contextValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
