import {BiCalendar} from "react-icons/bi"
import {FiLayers} from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import {BsHeart} from "react-icons/bs"
import {
  HStack,
  Button,
  Input,
  useNumberInput,
} from "@chakra-ui/react";


export const ItemCartCard = ({ data, handleCart }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
  return (
    <>
      <div className="itemCartMainCont">
        <div className="ItemCartCardDiv">
          <img src={data.img1} alt="" />
        </div>
        <div className="ItemCartCardDisc">
          <div className="ItemCartCardTitle">
            <h5>{data.Title}</h5>
          </div>
          <div className="ItemcartCardGenuine">
            <h5>100% Genuine </h5>
          </div>
          <div className="ItemcartCardDelivery">
            <BiCalendar />
            <div>
              <p>Delivery By</p>
              <p>Tue, 08 Mar</p>
              <p>Charges FREE For Today</p>
            </div>
          </div>
          <div className="ItemcartCardDelivery">
            <FiLayers />
            <div>
              <p>Assembly</p>
              <p>{data.Assembly}</p>
            </div>
          </div>
        </div>
        <div className="incAndDecCart">
          <div>
            <HStack maxW="130px">
              <Button {...dec}>-</Button>
              <Input {...input} />
              <Button {...inc}>+</Button>
            </HStack>
          </div>
          <div className="ForCartPriceDec">
            <h4 style={{ textDecoration: "line-through" }}>
              {" "}
              ₹ {data.orgPrice}
            </h4>
            <h3 className="ForCartPriceAtual">
              ₹ {data.orgPrice - Math.round((data.orgPrice * data.offer) / 100)}
            </h3>
          </div>
        </div>
        <div className="cartItemDeleteandWish">
          <RiDeleteBin5Line className="DeleteIconCart" onClick={()=>{
            handleCart(data)
          }}/>
          <BsHeart className="DeleteIconCart heartCart" />
        </div>
      </div>
    </>
  );
};