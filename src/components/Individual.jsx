import "../Styles/Individual.css";
import { Settees } from "../add_data";
import Zoom from "react-img-zoom";
import {
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {Link} from "react-router-dom"
import { BsHeart, BsStarFill} from "react-icons/bs";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SingleProduct = () => {
  const [items,setItems] = useState((JSON.parse(localStorage.getItem("cartItems"))) || {})
  const item = JSON.parse(localStorage.getItem("indProduct"));
  const [option, setOPtion] = useState("1");
  // let item = Settees[0];

   useEffect(() => {
     localStorage.setItem("cartItems", JSON.stringify(items));
   }, [items]);
   const handleCart = (data) => {
     if (!items.includes(data)) {
       setItems([...items, data]);
     }
    //  console.log("carttemp", items);
   };
  return (
    <>
      <Header />
      <div className="indContainer">
        <div className="forLeftRigh">
          <div className="forIndImg">
            <div className="IndheroImg">
              <Zoom img={item.img1} zoomScale={2.5} width={500} height={520} />
            </div>
            <div className="forSideHeroDiv">
              <div className="sideHeroIMg">
                <img src={item.img2} alt="" />
              </div>
              <div className="sideHeroIMg">
                <img src={item.img3} alt="" />
              </div>
            </div>
          </div>
          <div className="forIndInfo">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                fontSize: "13px",
              }}
            >
              <p>Home</p>
              <MdOutlineKeyboardArrowRight />
              <p>Furniture</p>
              <MdOutlineKeyboardArrowRight />
              <p>Seating</p>
              <MdOutlineKeyboardArrowRight />
              <p>Seettes</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="indTitle">
              <div className="indHeadTitle">
                <h1 className="h1">{item.Title}</h1>
                <h2 className="indBrand">By {item.Brand}</h2>
              </div>
              <div className="indHeadIcons">
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <BsHeart className="heartSvg" />
                  <img
                    className="shareImg"
                    src="https://ii1.pepperfry.com/images/svg/w21-share-icon.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="ratingandWar">
              <div className="indRating">
                <Rating rating={item.rating} />
                <h3 className="indWarh3">
                  {item.Warranty !== "NA" ? item.Warranty : ""}
                </h3>
              </div>
            </div>
            <div className="indItemOffer">
              <h1 className="indPriceh1">
                ₹{" "}
                {item.orgPrice - Math.round((item.orgPrice * item.offer) / 100)}
              </h1>
              <h3 className="indOfferh3">({item.offer}% off)</h3>
            </div>
            <div style={{ marginTop: "10px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "400" }}>
                Save ₹ {Math.round((item.orgPrice * item.offer) / 100)}
                {"  "}
                <span style={{ textDecoration: "line-through" }}>
                  MRP ₹ {item.orgPrice}
                </span>
                {"  "}(Inc of all taxes)
              </h3>
            </div>
            <div className="indEmidiv">
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                Last Day to{" "}
                <span style={{ marginLeft: "5px", fontWeight: "600" }}>
                  Earn Cashback ₹ {item.cashback}
                </span>
                <span style={{ marginLeft: "5px" }}>
                  <img
                    style={{ height: "15px" }}
                    src="https://ii1.pepperfry.com/images/svg/w18-info-ic.svg"
                    alt=""
                  />
                </span>
              </h2>
              <h2 style={{ marginTop: "10px" }}>EMI Starting ₹ 918</h2>
              <div className="indCoupone"></div>
              <div className="indButtonadnmore">
                <div>
                  <select
                    id="Select"
                    className="indqtyoption"
                    name="options"
                  >
                    <option value="Qty 1">Qty 1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div>
                  <div
                    className="indAddToCart"
                    onClick={() => {
                      handleCart(item);
                    }}
                  >
                    ADD TO CART
                  </div>
                  <div>
                    <div className="indParaDiv">
                      <p>Brand</p>
                      <p className="indpara">{item.Brand}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Weigth</p>
                      <p className="indpara">{item.Weight}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Warranty</p>
                      <p className="indpara">{item.Warranty}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Primary Material</p>
                      <p className="indpara">{item.Primary_Material}</p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <Link to="/Cart"> */}
                  <div
                    className="indBuyNow"
                    onClick={() => {
                      handleCart(item);
                      window.location.href = "/cart";
                    }}
                  >
                    BUY NOW
                  </div>
                  {/* </Link> */}
                  <div>
                    <div className="indDimensions">
                      <p>Dimensions</p>
                      <p className="indDimensions">{item.Dimensions}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Colour</p>
                      <p className="indpara">{item.Colour}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Assembly</p>
                      <p className="indpara">{item.Assembly}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Room Type</p>
                      <p className="indpara">{item.Room_Type}</p>
                    </div>
                    <div className="indParaDiv">
                      <p>Poduct Rating</p>
                      <p className="indpara">{item.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};



const Rating = ({rating}) => {
    let dp = new Array(5).fill(-1)
    for(var i = 0; i<rating; i++){
      dp[i] = 1;
    }
    let count = 0
    return (
      dp.map((e)=>{
        count++
        if(e===1){
          return <BsStarFill key={count} className="indRatingStar " />;
        }else{
          return <BsStarFill key={count} className="blankStar indRatingStar" />;
        }
      })
    )
}
