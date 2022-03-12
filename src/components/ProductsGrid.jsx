import { Card } from "./Card"
import { getProducts, get_Data_Loading,empty_Store } from "../Redux/ProductsList/actions";
import {useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { Load } from "./Load";
// import axios from "axios"
export const ProductsGrid = ({ q}) => {
  const [load] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
  const [temp, cartTemp] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const { data, loading } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(empty_Store())
    getProductsData();
  }, []);

  useEffect(()=>{
    console.log(loading)
  },[loading])
  const getProductsData = () => {
    dispatch(get_Data_Loading());
      dispatch(getProducts(q));
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(temp));
  },[temp])
  const handleCart = (data) => {
    if(!temp.includes(data)){
      cartTemp([...temp, data]);
    }
  };
  return loading || data.length<1 ? (
    <div className="productsGridLoad">
      {load.map((item) => {
        return <Load key={item}/>;
      })}
    </div>
  ) : (
    <div className="productsGridMain">
      {data.map((item) => {
        return <Card key={item._id} item={item} handleCart={handleCart} />;
      })}
    </div>
  );
};