import "../Styles/Checkout.css";
import { Carttotal } from "./CartTotalForPayment";
import { Link } from "react-router-dom";
import {CartHeader} from "./CartHeader";
import {CartFooter} from "./CartFooter"

export const Checkout = () => {
  return (
    <>
      <CartHeader />
      <div id="main">
        <div id="details">
          <div id="head">
            <div id="h1">SHIPPING & BILLING DETAILS</div>
            <div id="h2">Tell Us Where to Deliver </div>
          </div>
          <h4 style={{ textAlign: "left", marginLeft: "40px" }}>
            Add Shipping Address
          </h4>
          <div className="input">
            <form>
              Name{" "}
              <input
                type="text"
                placeholder="e.g. Aaradhana Shukla"
                className="text"
              />
              <br />
              <br />
              Mobile Number{" "}
              <input
                type="number"
                placeholder="842xxxxx65"
                className="text  text2"
              />
              <br />
              <br />
              Pincode{" "}
              <input
                type="number"
                placeholder="221007"
                className="text text3"
              />
              <br />
              <br />
              Address{" "}
              <input
                type="text"
                placeholder="Enter your address here"
                className="text text4"
              />
              <br />
              <br />
              <input type="text" placeholder="City" className="text5" />
              <input type="text" placeholder="State" className="text6" />
              <br /> <br />
              <input type="text" placeholder="Country" className="text7" />
              <br />
              <br />
              <Link to="/payment">
                <button
                  className="btn"
                  // onClick={() => {
                  //   window.location.href = "/payment";
                  // }}
                >
                  Continue
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div id="cart">
          <Carttotal />
        </div>
      </div>
      <CartFooter/>
    </>
  );
};
