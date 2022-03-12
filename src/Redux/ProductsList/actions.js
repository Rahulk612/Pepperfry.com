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
  Get_Data_Loading,
  Get_Data_Success,
  Empty_Store,
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


export const get_Data_Loading  = (payload) => {
  return {
    type: Get_Data_Loading,
    payload
  };
}



export const get_Data_Success = (payload) => {
  return {
    type: Get_Data_Success,
  };
}


export const empty_Store = () => {
  return {
    type: Empty_Store,
  };
};


export const getProducts = (query) => (dispatch) => {
  get_Data_Loading(true)
  axios
    .get(`https://backend-pepperfry.herokuapp.com/Pepperfry/${query}`)
    .then(({ data }) => {
      get_Data_Success()
      dispatch(getDataSuccess(data));
    })
    .catch(() => {
      // get_Data_Loading();
    });
};
