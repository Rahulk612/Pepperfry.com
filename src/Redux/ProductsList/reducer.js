import axios from "axios"
import { addToCart } from "./actions";
import {
  Higher_Price,
  Lower_Price,
  Fastest_Shipping,
  Brands,
  Under,
  Style,
  Material,
  Discount,
  GetData,
  ADD_TO_CART,
  DEL_FROM_CART,
} from "./actionTypes";

const init = {
    loading:true,
    main:[],
    data: [],
    cartItems: [],
    staticCart:[],
    brands:[],
}

export const ProductReducer = (store = init,{type,payload}) => {
    switch (type) {
      case GetData:
        return { ...store, loading: false, data: payload, main: payload,brands:BrandsFn(payload) };
      case Higher_Price:
        return {
          ...store,
          loading: false,
          data: sortByHIgh("high", store.data),
        };
      case Lower_Price:
        return {
          ...store,
          loading: false,
          data: sortByHIgh("low", store.data),
        };
      case Fastest_Shipping:
        return {
          ...store,
          loading: false,
          data: sortByHIgh("fast", store.data),
        };
      case Brands:
        return {
          ...store,
          loading: false,
          data: brandSort(payload, store.main),
        };
      case Under:
        return {
          ...store,
          loading: false,
          data: PriceRangeFn(payload, store.main),
        };
      case Style:
        return { ...store, loading: true };
      case Material:
        return { ...store, loading: true };
      case Discount:
        return {
          ...store,
          loading: false,
          data: DiscountFunction(payload, store.main),
        };
      case ADD_TO_CART:
        return {
          ...store,
          loading: false,
          cartItems: [ ...store.cartItems, CheckExist(store.cartItems,payload) ],
          staticCart:payload
        };
      case DEL_FROM_CART:
        return {
          ...store,
          loading: false,
          cartItems: DeletFromCart(store.cartItems,payload)
        };
      default:
        return { ...store };
    }
}



const BrandsFn = (payload) => {
  let brands =[]
  let count = 1;
  let check = []
  for(var i = 0; i<payload.length; i++){
    if(!check.includes(payload[i].Brand)){
      check.push(payload[i].Brand)
      let obj = {
        brand: payload[i].Brand,
        id: count++,
      };
      brands.push(obj)
    }else {
      count++
    }
  }
  return brands
}

const DeletFromCart = (data,item) => {
  if(item){
    let arr = data.filter((e)=>{
      if(e!=item){
        return e
      }
    })
    return arr
  }

  return data
}


const CheckExist = (data,item) => {
  if(!data.includes(item)){
    return item
  }
}



function sortByHIgh(state,data){
    let arr = data
    if(state==="high"){
        arr.sort(
          (a, b) => (b.orgPrice - Math.round((b.orgPrice * b.offer) / 100)) - (a.orgPrice - Math.round((a.orgPrice * a.offer) / 100))
        );
    }else if(state==="low") {
        arr.sort(
          (a, b) =>
            a.orgPrice -
            Math.round((a.orgPrice * a.offer) / 100) -
            (b.orgPrice - Math.round((b.orgPrice * b.offer) / 100))
        );
    }else if(state==="fast"){
        arr.sort((a, b) => a.shipping - b.shipping);
    }
    return arr
}


const brandSort = (payload,data) => {
    let arr = [];
    if(payload.length>0){
        for(let i = 0; i<payload.length; i++){
            for(var j = 0; j<data.length; j++){
                if(payload[i]===data[j].Brand){
                    arr.push(data[j])
                }
            }
        }
        return arr
    }
    return data
}

const PriceRangeFn = (payload,data) =>{
    let arr = []
    if(payload[payload.length-1]==="Under"){
        data.forEach((e)=>{
            if((e.orgPrice - Math.round((e.orgPrice * e.offer) / 100))<10000){
                arr.push(e)
            }
        })
        return arr
    }else if (payload[payload.length - 1] === "Over") {
      data.forEach((e) => {
        if (e.orgPrice - Math.round((e.orgPrice * e.offer) / 100) > 10000) {
          arr.push(e);
        }
      });
      return arr;
    }

    return data
}


const DiscountFunction = (payload,data) => {
    let arr = []
    if (payload == 10) {
      data.forEach((e) => {
        if (e.offer >= 10) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload === 20) {
      data.forEach((e) => {
        if (e.offer >= 20) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload == 30) {
      data.forEach((e) => {
        if (e.offer >= 30) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload == 40) {
      data.forEach((e) => {
        if (e.offer >= 40) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload == 50) {
      data.forEach((e) => {
        if (e.offer >= 50) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload == 60) {
      data.forEach((e) => {
        if (e.offer >= 60) {
          arr.push(e);
        }
      });
      return arr;
    } else if (payload == 70) {
      data.forEach((e) => {
        if (e.offer >= 70) {
          arr.push(e);
        }
      });
      return arr;
    }
    return data
}
