import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../Styles/Products.css";
import { ProductsGrid } from "./ProductsGrid";
import { ProductsSort } from "./ProductsSort";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {useState}  from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const Products = ({query}) => {
  const {id} = useParams()
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Header />
      <div className="productsContainer">
        <div className="currentStore">
          <p>Home </p>
          <p>
            <MdOutlineKeyboardArrowRight className="MdOutlineKeyboardArrowRight" />
          </p>
          <p>Funrniture </p>
          <p>
            <MdOutlineKeyboardArrowRight />
          </p>
          <p> Seating </p>
          <p>
            <MdOutlineKeyboardArrowRight />
          </p>
          <p>{id}</p>
        </div>
        <h1 className="heroName">{capitalizeFirstLetter(id)}</h1>
        <div></div>
        <div className="productsDiv">
          <ProductsSort />
          <ProductsGrid query={query} q={id} />
        </div>
      </div>
      <Footer />
    </>
  );
};
