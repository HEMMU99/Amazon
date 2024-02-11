import React from "react";
import "./Product.css";
import { contextValue } from "../Context/StateProvider";

const Product = (props) => {
  const p = { ...props };

  const [{ cart }, dispatch] = contextValue();
  const addToCart = () => {
    dispatch({
      type: "Add-to-cart",
      item: {
        id: p.id,
        title: p.title,
        image: p.image,
        price: p.price,
        rating: p.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{p.title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{p.price}</strong>
        </p>
        <div className="product-rating" key={p.id}>
          {Array(p.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={p.image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
