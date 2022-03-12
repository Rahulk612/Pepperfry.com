import styled from "styled-components"
import { BsHeart, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  /* height: 500px; */
  margin-bottom: 25px;
  cursor: pointer;
`;

const Content = styled.div`
  height: 60%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

`;
const Button = styled.button`
  height: 45px;
  width: 45%;
  background-color: #f08000;
  margin-top: 75%;
  color: white;
  font-weight: 600;
  margin-left: 26%;
  border-radius: 3px;
  transition: 4s;
  display: none;
`;


export const Card = ({ item, handleCart }) => {
let navigate = useNavigate();


  return (
    <Div className="DivDiv">
      <Content className="ContentContent" img={item.img1}>
        <div className="WishHeart">
          <BsHeart />
        </div>
        <div>
          <Button
            className="ButtonButton"
            onClick={() => {
              handleCart(item);
            }}
          >
            Add To Cart
          </Button>
          <div className="RatingStart">
            {item.rating}
            <span className="ratingIcon">
              <BsStarFill />
            </span>
          </div>
        </div>
      </Content>
      <div className="contentDiv">
        {/* <Link to="/IndividualProduct"> */}
          <h2
            className="itemTitle"
            onClick={() => {
              localStorage.setItem("indProduct", JSON.stringify(item));
              navigate("/IndividualProduct");
            }}
          >
            {item.Title}
          </h2>
        {/* </Link> */}
        <p className="itemBrand">{item.Brand}</p>
        <h2 className="itemPrice" style={{ display: "flex", gap: "20px" }}>
          ₹ {item.orgPrice - Math.round((item.orgPrice * item.offer) / 100)}
          <span>
            <h3
              className="lineThrough"
              style={{
                textDecoration: "line-through",
              }}
            >
              ₹ {item.orgPrice}
            </h3>
          </span>
        </h2>
        <h3 className="itemOffer">{item.offer}% Off</h3>
        <p className="cashbackShips">
          Earn Cashback <span className="cashbackBold">₹{item.cashback}</span>
        </p>
        <p className="cashbackShips">
          Ships in <span className="cashbackBold">{item.shipping} day</span>
        </p>
      </div>
    </Div>
  );
};




