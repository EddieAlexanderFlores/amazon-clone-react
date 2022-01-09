import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../store/reducer";
import { useStateValues } from "../../store/StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValues();

  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale={true}
        prefix={"$"}
        renderText={(value) => (
          <div>
            <p className="subtotal-text-container">
              <span className="subtotal-text">
                Subtotal ({basket.length} items):
              </span>{" "}
              <strong className="subtotal-price">{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order constains a gift
            </small>
          </div>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
