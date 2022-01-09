import React from "react";
import "./Product.css";
import { useStateValues } from "../../store/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValues();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "add_to_basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-image-container">
        <img className="product-image" src={image} alt="" />
      </div>

      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
