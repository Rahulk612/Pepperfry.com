import {
  Higher_Price,
  Lower_Price,
  Fastest_Shipping,
  Brands,
  Under,
  Over,
  Style,
  Material,
  Discount,
  GetData,
  ADD_TO_CART,
  DEL_FROM_CART,
} from "./actionTypes";
import axios from "axios";

export const highPrice = () => ({
    type:Higher_Price,
})

export const lowPrice = () => ({
    type:Lower_Price,
})

export const fastestShipping = () => ({
  type: Fastest_Shipping,
});


export const brandFn = (payload) => ({
  type: Brands,
  payload,
});


export const UnderOrAbove = (payload) => ({
  type: Under,
  payload,
});





export const style = (payload) => ({
  type: Style,
  payload,
});



export const material = (payload) => ({
  type: Material,
  payload,
});


export const discount = (payload) => ({
  type: Discount,
  payload,
});




export const getDataSuccess = (payload) => {
  return {
    type: GetData,
    payload,
  };
};


export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
}


export const delFromCart = (payload) => {
  return {
    type: DEL_FROM_CART,
    payload,
  };
}


export const getProducts = (query) => (dispatch) => {
  axios
    .get(`https://backend-pepperfry.herokuapp.com/Pepperfry/${query}`)
    .then(({ data }) => {
      console.log("axiosGetData", data);
      dispatch(getDataSuccess(data));
    })
    .catch(() => {
      // dispath error
    });
};
