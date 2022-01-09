import React from "react";
import { useStateValues } from "../../store/StateProvider";
import "./Checkout.css";
import amazonAd from "../../../images/banner/checkout-amazon-creditcard.jpg";
import amazonAdMobile from "../../../images/banner/checkout-amazon-creditcard-mobile.jpg";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValues();

  return (
    <div className="checkout">
      <div className="checkout-left-column">
        <img className="checkout-ad big-screen" src={amazonAd} alt="" />
        <img className="checkout-ad mobile" src={amazonAdMobile} alt="" />
        {basket?.length === 0 ? (
          <div>
            <h1 className="checkout-title">Your Amazon Basket is empty.</h1>
          </div>
        ) : (
          <div>
            {basket.length > 0 && (
              <div className="checkout-right-column mobile">
                <Subtotal />
              </div>
            )}
            <h1 className="checkout-title">Shopping Basket</h1>
            {/* list all the checkout products */}
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
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
      {basket.length > 0 && (
        <div className="checkout-right-column big-screen">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
