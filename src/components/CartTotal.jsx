import { Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";


export const Carttotal = ({ data }) => {
    // const [cartTotal,setTotal] = useState((data) || (JSON.parse(localStorage.getItem("CartTotal"))))


    const { cartItems } = useSelector((store) => store.data);

    useEffect(() => {
      localStorage.setItem("CartTotal", JSON.stringify(cartItems));
    }, [cartItems]);
  return (
    <>
      <div className="itemCartPriceInner">
        <div className="itemCartValueDiv">
          <p>Cart Value</p>
          <p>₹ {TotalCartValue(cartItems, "offer")}</p>
        </div>
        <div className="itemRetailsDiscDiv">
          <p>Retail Discount</p>
          <p>(-) ₹ {TotalCartValue(cartItems, "discount")}</p>
        </div>
        <div className="itemDeleveryDiv">
          <p>Delivery (FREE)</p>
          <p>₹ 0</p>
        </div>
        <div className="hr"></div>
        <div className="itemCartTotalDiv">
          <p>Total</p>
          <p>₹ {TotalCartValue(cartItems, "")}</p>
        </div>
        <div className="hr"></div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="checkBoxItem">
          <Checkbox size="lg" borderColor="gray">
            {" "}
          </Checkbox>
          <p>Contribute Rs.99 For COVID Relief Through GiveIndia.</p>
        </div>
        <div className="checkBoxItem">
          <Checkbox size="lg" borderColor="gray">
            {" "}
          </Checkbox>
          <p>
            Use GSTIN For Business Purchase (Optional) Claim Tax Credit By
            Entering Your Companies GSTIN.
          </p>
        </div>
        <div
          className="itemPlcaeOrder"
          onClick={() => {
            window.location.href = "/checkout";
          }}
        >
          <h1>PLACE ORDER</h1>
        </div>
      </div>
    </>
  );
};

function TotalCartValue(data, payload) {
  let total = 0;
  if (payload === "offer") {
    for (var i = 0; i < data.length; i++) {
      total += data[i].orgPrice;
    }
    return total;
  } else if (payload === "discount") {
    total = 0;
    for (var j = 0; j < data.length; j++) {
      total += Math.round((data[j].orgPrice * data[j].offer) / 100);
    }
    return total;
  } else {
    total = 0;
    for (var k = 0; k < data.length; k++) {
      total +=
        data[k].orgPrice - Math.round((data[k].orgPrice * data[k].offer) / 100);
    }
    return total;
  }
}
