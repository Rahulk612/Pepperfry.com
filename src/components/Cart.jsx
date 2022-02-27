import {Checkbox} from "@chakra-ui/react"
import { CartHeader } from "./CartHeader";
import {Settees} from "../add_data"
import {ItemCartCard} from "./ItemCartCard"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect, useState } from "react";
import { CartFooter } from "./CartFooter";
import "./Cart.css";
import {
  getProducts,
  delFromCart,
  addToCart,
} from "../Redux/ProductsList/actions";
import { Carttotal } from "./CartTotal";



export const Cart = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const user = JSON.parse(localStorage.getItem("userName"));

  const { cartItems } = useSelector((store) => store.data);


  const dispatch = useDispatch()
  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = () => {
    dispatch(getProducts());
  };


  useEffect(()=>{
    cartAdding()
  },[])

  useEffect(() => {
    console.log("shda",cartItems);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    setData(cartItems)
  }, [cartItems]);

  const cartAdding = () => {
    data.forEach((e)=>{
      dispatch(addToCart(e));
    })
  }

  useEffect(()=>{
    console.log("cartItems", cartItems);
    CartProducts()
  },[cartItems])

  const CartProducts = () => {
    dispatch(delFromCart());
  }
  

  const handleCart = (item) => {
    dispatch(delFromCart(item));
  };


    return data ? (
      <div>
        <CartHeader user={user}/>
        <div className="cartItems">
          <div className="inYourCart">
            <h1>
              IN YOUR CART
              <span>
                <p>({data.length} items)</p>
              </span>
            </h1>
          </div>
          <div className="cartContainerDiv">
            <div className="itemsCartContainer">
              {data.map((item) => {
                return <ItemCartCard key={item._id} data={item} handleCart={handleCart} />;
              })}
            </div>
            <div className="itemCartPrice">
              <Carttotal data={data}/>
            </div>
          </div>
        </div>
        <CartFooter />
      </div>
    ) : (
      "No Data Available in Cart"
    );
}




function TotalCartValue(data,payload){
  let total = 0;
  if(payload==="offer"){
    for(var i = 0; i<data.length; i++){
      total += data[i].orgPrice;
    }
    return total
  }else if (payload === "discount") {
    total = 0
    for (var j = 0; j < data.length; j++) {
     
      total += Math.round((data[j].orgPrice * data[j].offer) / 100);
    }
    return total;
  }else{
     total = 0;
     for (var k = 0; k < data.length; k++) {
       total += data[k].orgPrice - Math.round((data[k].orgPrice * data[k].offer) / 100);
     }
     return total;
  }
}