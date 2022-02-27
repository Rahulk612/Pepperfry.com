import { useState } from "react";
import "../Styles/Payments.css";
import {Link} from "react-router-dom";


export const Payment = () => {
  const [cartTotal, setTotal] = useState(
   JSON.parse(localStorage.getItem("CartTotal"))
  );

  return (
    <div className="Paymentcontainer">
      <div className="left">
        <div className="top">
          <a href="#" className="back-link">
            Back
          </a>
          <img
            src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1"
            alt=""
            className="logo"
          />
        </div>
        <h2 className="enter-card">Enter new card</h2>
        <p>
          Total Payable Amount <strong>{TotalCartValue(cartTotal)}</strong>
        </p>
      </div>
      <div className="right">
        <h6 className="right-head">CARDS (CREDIT/DEBIT)</h6>

        <form action="">
          <label htmlFor="">New Card</label>
          <br />
          <input type="text" placeholder="Enter Card Number" className="card" />
          <br />
          <div className="expiry-and-cvv">
            <div>
              <label htmlFor="" className="expiry">
                Expiry
              </label>
              <input type="text" placeholder="MM/YY" className="details" />
            </div>
            <div>
              <label htmlFor="" className="expiry">
                CVV
              </label>
              <input type="text" placeholder="MM/YY" className="details" />
            </div>
          </div>
          <label htmlFor="">Name on Card</label>
          <br />
          <input
            type="text"
            placeholder="Enter name as on card"
            className="card"
          />
          <br />
          <div className="payment-message">
            <input type="checkbox" className="check-box" />
            <p>Save this option securely for faster payments</p>
          </div>
          <Link to="/Paymentsuccessful">
            <button
              className="button"
              // onClick={() => {
              //   window.location.href = "/Paymentsuccessful";
              // }}
            >
              PROCEED
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};


function TotalCartValue(data) {
  let total = 0;
  
    for (var k = 0; k < data.length; k++) {
      total +=
        data[k].orgPrice - Math.round((data[k].orgPrice * data[k].offer) / 100);
    }
    return total;
  
}