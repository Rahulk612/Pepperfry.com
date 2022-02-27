import "./Login.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {

  const [login, setLogin] = useState("");

  const [loginData, setLoginData] = useState({});

  const handleCheck = (e) => {
    const { name } = e.target;
    setLoginData({
      ...loginData,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("lala", login);
  }, [login]);

  const LoginFn = () => {
    if (loginData) {
      console.log("going to axios", loginData);
      axios
        .post(
          "http://backend-pepperfry.herokuapp.com/pepperfry/login",
          loginData
        )
        .then((res) => setLogin(res.data));
    }
  };
  return (
    <>
      <Header />

      <div id="left1">
        <img
          id="pic"
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_09022022.jpg"
          alt=""
        />
      </div>
      <div id="right1">
        <form
          style={{ marginTop: "50px" ,marginLeft:"40px"}}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitting", loginData);
            LoginFn();
          }}
        >
          <input
            onChange={handleCheck}
            type="text"
            placeholder="Email ID"
            className="FT"
            name="email"
          />
          <br />
          <br />
          <br />
          <input
            onChange={handleCheck}
            type="password"
            placeholder="Password"
            className="FT"
            name="password"
          />
          <br />
          <br />
          <br />
          {/* <Link to="/"> */}
          {/* <input id="buttn">Login</input> */}
          <input id="buttn" type="submit" value="submit" />
          {/* </Link> */}
          <p style={{ fontSize: "13px", marginTop: "5px" }}>
            By registering you agree to our{" "}
            <a href="https://www.pepperfry.com/terms-of-use.html" id="TnC">
              Terms & Conditions
            </a>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};
