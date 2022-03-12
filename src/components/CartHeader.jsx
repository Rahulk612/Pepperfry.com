
import {BsCart3} from "react-icons/bs"

export const CartHeader = ({user}) => {

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
          <div className="headerCartIcon">
            <BsCart3 style={{fontSize:"20px",marginLeft:"5px"}}/>
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
            <h1>WELCOME {user? user.name : "No user"} !</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};
