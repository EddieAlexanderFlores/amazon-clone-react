import React from "react";
import "./CheckoutProduct.css";
import { useStateValues } from "../../store/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValues();

  const removeFromBasket = () => {
    dispatch({ type: "remove_from_basket", id: id });
  };

  return (
    <div className="checkout-product">
      <div className="checkout-product-image-container">
        <img className="checkout-product-image" src={image} alt="" />
      </div>

      <div className="checkout-product-info">
        <h2 className="checkout-product-title">{title}</h2>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
