import { Card } from "./Card"
import {getProducts} from "../Redux/ProductsList/actions"
import {useEffect,useState,createContext} from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios"
export const ProductsGrid = ({ query,q}) => {
  const [temp, cartTemp] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const { data, loading } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = () => {
    dispatch(getProducts(q));
  };

  useEffect(()=>{
    // console.log("ahsd",temp)
    localStorage.setItem("cartItems", JSON.stringify(temp));
  },[temp])
  const handleCart = (data) => {
    if(!temp.includes(data)){
      cartTemp([...temp, data]);
    }
    // console.log("carttemp", temp);
  };

  return loading ? (
    "Loading.................."
  ) : (
    <div className="productsGridMain">
      {data.map((item) => {
        return <Card key={item._id} item={item} handleCart={handleCart} />;
      })}
    </div>
  );
};