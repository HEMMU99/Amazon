import React from "react";
import "./CheckoutProduct.css";
import { contextValue } from "../Context/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = contextValue();

  const removeFromCart = () => {
    dispatch({
      type: "remove-from-cart",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt="" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromCart}> Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
