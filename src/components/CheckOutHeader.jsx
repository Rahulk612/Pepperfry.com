import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useEffect } from "react";

export const CartHeader = ({ user }) => {
  return (
    <div className="CartHeader">
      <div className="headerCart">
        <div className="headerLogo">
          <img
            src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1"
            alt=""
          />
        </div>
        <div className="statusCart">
          <div className="headerCartIcon" style={}>
            <BsCart3 style={{ fontSize: "20px", marginLeft: "5px" }} />
            <h1>Cart</h1>
          </div>
          <div>----</div>
          <div>
            <h1>Delivery & Billing Address</h1>
          </div>
          <div>----</div>
          <div>
            <h1>Payment</h1>
          </div>
        </div>
        <div className="headerName">
          <h1>WELCOME {user ? user.name : ""} !</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};
