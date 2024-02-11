import React from "react";
import "./Checkout.css";
import { contextValue } from "../Context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../Subtotal/SubTotal";
import checkout from "../../assets/checkout-ad.jpg";

const Checkout = () => {
  const [{ cart }] = contextValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkout} alt="" />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shoppng Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout-right">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
