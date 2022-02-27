import "./Header.css";
import { Link } from "react-router-dom";
//import Button from '@mui/material/Button';
import { Login } from "./Login";
import { useState, useEffect, useContext } from "react";
import axios from "axios"
// import { ThemeContext } from "../components/contextProvider/createContextProvider"

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

export const Header = () => {

  // const { addUserName } = useContext(ThemeContext);

  const [user,setUser] = useState(("" || JSON.parse(localStorage.getItem("userName"))))
  
  const [formData, setFormdata] = useState({
  });


  const handleClick = (e) => {
    const { name } = e.target;
    setFormdata({
      ...formData,
      [name]: e.target.value,
    });
  };

  useEffect(()=>{
    // console.log("lala", user);
    localStorage.setItem("userName", JSON.stringify(user));
  },[user])


  const Register = () => {
    if(formData){
      console.log("going to axios",formData)
      axios
        .post(
          "http://backend-pepperfry.herokuapp.com/pepperfry/registration",
          formData
        )
        .then((res) => setUser(res.data))
    }
  }


  return (
    <div className="HeadMain">
      <div id="header">
        <div id="head1">
          <Link to="/" id="img11">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/pepperfry-logo.png"
              alt=""
            />
          </Link>
          <div className="img12">
            <a className="nam" href="/products/seettes">
              SHOP
            </a>
            <a className="nam" href="/">
              GET INSPIRED
            </a>
            <a className="nam" href="/">
              PARTNER
            </a>
          </div>
          <div id="search">
            <input
              type="text"
              placeholder="Door to happiness begins with a Search"
            />
            <img
              alt="imgtag"
              src="https://image.flaticon.com/icons/png/128/482/482631.png"
            />
          </div>

          <div id="options">
            <div className="items" style={{ marginLeft: "0" }}>
              <img
                alt="imgtag"
                src="	https://ii1.pepperfry.com/images/svg/header-wishlist-icon-2021.svg"
              />
            </div>
            <Link to="/cart" className="items" style={{ marginLeft: "0" }}>
              <img
                alt="imgtag"
                src="https://ii1.pepperfry.com/images/svg/header-cart-icon-2021.svg"
              />
            </Link>
            <div className="items" style={{ marginLeft: "0" }}>
              {/* <Button onClick={handleOpen}><img alt="imgtag" src="https://ii1.pepperfry.com/images/svg/header-profile-icon-2021.svg
                    "/></Button> */}
              <div
                onClick={() => {
                  openForm();
                }}
              >
                <img
                  alt="imgtag"
                  src="https://ii1.pepperfry.com/images/svg/header-profile-icon-2021.svg"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="form-popup" id="myForm">
              <div className="form-container">
                <div id="left">
                  <img
                    src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_09022022.jpg"
                    style={{ height: "100%", width: "100%", margin: "0px" }}
                  />
                </div>
                <div id="right">
                  <div
                    id="cross"
                    onClick={() => {
                      closeForm();
                    }}
                  >
                    {" "}
                    <img
                      style={{
                        height: "35px",
                        width: "35px",
                        margin: "0px",
                        cursor: "pointer",
                      }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAADU1NTOzs4VFRXR0dEQEBANDQ2+vr7GxsbKysrs7Oz5+flKSkry8vLa2tqenp4vLy+zs7OSkpLm5uZSUlIlJSUfHx8+Pj6srKxra2vsZw4OAAAD/UlEQVR4nO3di7aqIBAG4Ohq9+xe7/+gZ1uuo6bADBLg9H8PwGJCBkSg0QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKzXmaH0yFbnj2WeS7LXHss09Emu1zV22173Hkpc3fc3soyr5flxkuZzrK7qssfHsp85I0y75mHMl1tnurTtm8z7ratMp/RmnGdtyqj1HTfq8z9tKPMPFJ3XHfUpTDrUeZMU2aUEDddLfgycS5zoisyj/Ggtvvg/wfVNcRJ1yP69vRad5JMWxml5m4hTuaGMoNn1M3dUBulxg5Fjo0l3kM/p6YmdAvRHKBSyy9EYXKx1EdxB429rcDLV+LQWl9tFWIOGrphonINO2IsrRXipRtjkimFfUxt3bDAGDQMw0QlbDY9EGqkFtQHdbagFHf4akSfTpQqUTOqLYuWTl+OqYnUhsQQrVm0FLYNKf2QGCKxBUP3Q0IuLdnSjXay3RI2l55v9hq9WTIqKYu+3HyuAxG038SdQqQHqLbBYns7kmumFvq+OCYNE2/HgNEVdtr33w66EMlJ5k/uZx2P4cGonWYaTh0mXnys4jHRe6LqnobbJ9s1oXthYUdPEn99sZ1uJow+qKbBn9EC6yFrZVRGFlX8t01PWI/ZvPmgzgivS5U+C5S98NqhnlE5WdR97c4DVl+qhch6wDv6cED0WWU9RFYL9lhg9sKlsm4/SzSsEF9rN5Q1mYQC5CcN9/QUDatNphknQMfPA97xWoXzcyQS4Gi0Yg0aZItV7MAqrNkNWbSZTBfeoEGTRJKp+A8xsQD9h5hcgJ4zajpZtI43VzFKZRz8xJtvmiQaoL9BI6lhoslPukkwyVR8hJh0gNSPnQbkz6rR9Bw00hwmmlZ9Bo15QpNtvT6DxgBasOCebhJPMhXXEAcToGuIAwrQaY4ad+GXb8UdNKaDyKJ1zHFxCOPgJ8aXfhVhC3B/4ttQfD8Un0vFj4fi5zTi56Xi3y3Evx+Kf8cXv04jfq1N/Hqp+DVv8d8txH97Ev/9UPw3YPHf8cXvxRC/n0b8nijx+9rE700Uv79U/B5h8fu8xe/VF3/eQvyZGd65p2Y1B3HuiXd27XN+MoCza/LPH4o/Q8o6B9w9pqV9Dlj+WW7OeXx9Jkz5PD69FxrfDxhz1MA9Uf69GPLvNpF/P43PO4aoIeKeKL/k3/VFuq+NvhhI2kGV3D1RA79zj3BvIu+11T5oBL430X73JXcByZpuAt99+QP3l8q/g9bYiI6rY8a3/gibiA13Qbt+MzIMGhHugv6B+7y1d7L3Wd3UhRjr2nnp9+r/wH8jjOT/v8UowH+UZJH/o6Qg/H9mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACg6R8qNzKTFbvGxAAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>

                  <form
                    style={{ marginTop: "50px",marginLeft:"40px" }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("Submitting", formData);
                      Register();
                    }}
                  >
                    <input
                      onChange={handleClick}
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="FT"
                    />
                    <br />
                    <br />
                    <br />
                    <input
                      onChange={handleClick}
                      type="number"
                      placeholder="Mobile Number"
                      className="FT"
                      name="number"
                    />
                    <br />
                    <br />
                    <br />
                    <input
                      onChange={handleClick}
                      type="text"
                      placeholder="Email ID"
                      className="FT"
                      name="email"
                    />
                    <br />
                    <br />
                    <br />
                    <input
                      onChange={handleClick}
                      type="password"
                      placeholder="Password"
                      className="FT"
                      name="password"
                    />
                    <br />
                    <br />
                    <br />
                    {/* <Link to="/login"> */}
                    <input id="btn" type="submit" value="submit" />
                    {/* </Link> */}
                    <p style={{ fontSize: "13px", marginTop: "5px" }}>
                      By registering you agree to our{" "}
                      <a
                        href="https://www.pepperfry.com/terms-of-use.html"
                        id="TnC"
                      >
                        Terms & Conditions
                      </a>
                    </p>
                    <Link to="/login">
                      {" "}
                      <button id="btn2"> Existing User? Log In </button>{" "}
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className="wrapper">
            <ul className="nav-links">
              <li id="first">
                <a href="/products/beds">Furniture</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Sofas</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Sofas</a>
                        </li>
                        <li>
                          <a href="/">3 Seater sofas</a>
                        </li>
                        <li>
                          <a href="/">2 Seater Sofas</a>
                        </li>
                        <li>
                          <a href="/">1 seater Sofas</a>
                        </li>
                        <li>
                          <a href="/">Sofa Sets</a>
                        </li>
                        <li>
                          <a href="/">Sectional Sofas</a>
                        </li>
                        <li>
                          <a href="/">Recliners </a>
                        </li>
                        <li>
                          <a href="/">Chaise Loungers</a>
                        </li>
                        <li>
                          <a href="/">Sofa Cum Beds </a>
                        </li>
                        <li>
                          <a href="/">Futons </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Seating</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/">Settees</a>
                        </li>
                        <li>
                          <a href="/">Benches</a>
                        </li>
                        <li>
                          <a href="/">Ottomans</a>
                        </li>
                        <li>
                          <a href="/">Pouffes</a>
                        </li>
                        <li>
                          <a href="/">Recamiers</a>
                        </li>
                        <li>
                          <a href="/">Foot Stools</a>
                        </li>
                        <li>
                          <a href="/">Seating Stools </a>
                        </li>
                        <li>
                          <a href="/">Bean Bags</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Chairs</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Arm Chairs</a>
                        </li>
                        <li>
                          <a href="/">Rocking Chairs</a>
                        </li>
                        <li>
                          <a href="/">Cantilever Chairs</a>
                        </li>
                        <li>
                          <a href="/">Folding Chairs</a>
                        </li>
                        <li>
                          <a href="/">Iconic Chairs</a>
                        </li>
                        <li>
                          <a href="/">Cafe Chairs</a>
                        </li>
                        <li>
                          <a href="/">Dining Chairs </a>
                        </li>
                        <li>
                          <a href="/">Office Chairs</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Furniture.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/products/seettes">Sofas & Recliners</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>By Size</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">3 Seater Sofas</a>
                        </li>
                        <li>
                          <a href="/">2 Seater sofas</a>
                        </li>
                        <li>
                          <a href="/">1 Seater Sofas</a>
                        </li>
                        <li>
                          <a href="/">Sectional Sofas</a>
                        </li>
                        <li>
                          <a href="/">Sofa Sets</a>
                        </li>
                        <li>
                          <a href="/">1 Seater Recliners</a>
                        </li>
                        <li>
                          <a href="/">2 Seater Recliners </a>
                        </li>
                        <li>
                          <a href="/">3 Seater Recliners</a>
                        </li>
                        <li>
                          <a href="/">Recliner Sets </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>By Type</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Corner Sofas</a>
                        </li>
                        <li>
                          <a href="/">Modular Sofas</a>
                        </li>
                        <li>
                          <a href="/">Sofa cum Beds</a>
                        </li>
                        <li>
                          <a href="/">Futons</a>
                        </li>
                        <li>
                          <a href="/">Chaise Loungers</a>
                        </li>
                        <li>
                          <a href="/">Recliners</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Sofa Chairs</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/">Lounge Chairs</a>
                        </li>
                        <li>
                          <a href="/">Wing Chairs</a>
                        </li>
                        <li>
                          <a href="/">Barrel Chairs</a>
                        </li>
                        <li>
                          <a href="/">Slipper Chairs</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Sofa_Recliners.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/"> Cabinetry</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wardrobes</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">1 Door Wardrobes</a>
                        </li>
                        <li>
                          <a href="/">2 Door Wardrobes</a>
                        </li>
                        <li>
                          <a href="/">3 Door Wardrobes</a>
                        </li>
                        <li>
                          <a href="/">4 Door Wardrobes</a>
                        </li>
                        <li>
                          <a href="/">Fabric </a>
                        </li>
                        <li>
                          <a href="/">Futons</a>
                        </li>
                        <li>
                          <a href="/">Kids Wardrobes </a>
                        </li>
                        <li>
                          <a href="/">Fabric Wardrobes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Storage</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Book Shelves</a>
                        </li>
                        <li>
                          <a href="/">Book Cases</a>
                        </li>
                        <li>
                          <a href="/">Chest of Drawers</a>
                        </li>
                        <li>
                          <a href="/">Trunks</a>
                        </li>
                        <li>
                          <a href="/">Plastic Cabinets</a>
                        </li>
                        <li>
                          <a href="/">Office Cabinets</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Kids Storage</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/">Book Shelves</a>
                        </li>
                        <li>
                          <a href="/">Book Cases</a>
                        </li>
                        <li>
                          <a href="/">Drawers</a>
                        </li>
                        <li>
                          <a href="/"> Baskets</a>
                        </li>
                        <li>
                          <a href="/">Boxes </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Cabinetry.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">Beds</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Kids & Teens</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Cribs</a>
                        </li>
                        <li>
                          <a href="/">Single Beds</a>
                        </li>
                        <li>
                          <a href="/">Double Beds</a>
                        </li>
                        <li>
                          <a href="/">Trundle Beds</a>
                        </li>
                        <li>
                          <a href="/">Bookcase Beds</a>
                        </li>
                        <li>
                          <a href="/">Novelty Beds</a>
                        </li>
                        <li>
                          <a href="/">Tent Beds</a>
                        </li>
                        <li>
                          <a href="/">Bed Units</a>
                        </li>
                        <li>
                          <a href="/">Bunk Beds</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Mattresses</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Single Bed Mattress</a>
                        </li>
                        <li>
                          <a href="/"> Queen Bed Mattress</a>
                        </li>
                        <li>
                          <a href="/"> King Bed Mattress</a>
                        </li>
                        <li>
                          <a href="/"> Baby Mattress</a>
                        </li>
                        <li>
                          <a href="/"> Kids Mattress </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>By Style</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/">Modern </a>
                        </li>
                        <li>
                          <a href="/">Mid-Century</a>
                        </li>
                        <li>
                          <a href="/"> Contemporary </a>
                        </li>
                        <li>
                          <a href="/"> Transitional</a>
                        </li>
                        <li>
                          <a href="/">Mission</a>
                        </li>
                        <li>
                          <a href="/">Industrial </a>
                        </li>
                        <li>
                          <a href="/">Platform </a>
                        </li>
                        <li>
                          <a href="/">Poster Beds </a>
                        </li>
                        <li>
                          <a href="/">Industrial </a>
                        </li>
                        <li>
                          <a href="/">Folding Beds </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Beds.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">Mattresses</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Mattresses</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/"> Mattress Sizes</a>
                        </li>
                        <li>
                          <a href="/">Foldable Mattress</a>
                        </li>
                        <li>
                          <a href="/"> Baby Mattress</a>
                        </li>
                        <li>
                          <a href="/">Kids Mattress</a>
                        </li>
                        <li>
                          <a href="/">Mattress Protectors</a>
                        </li>
                        <li>
                          <a href="/">Mattress Toppers</a>
                        </li>
                        <li>
                          <a href="/">Pillows</a>
                        </li>
                        <li>
                          <a href="/">Bed Wedges </a>
                        </li>
                        <li>
                          <a href="/">Mattress Steaming </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Mattress Type</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Coir</a>
                        </li>
                        <li>
                          <a href="/">Foam </a>
                        </li>
                        <li>
                          <a href="/">Memory Foam </a>
                        </li>
                        <li>
                          <a href="/">Bonnell Spring</a>
                        </li>
                        <li>
                          <a href="/">Pocket Spring </a>
                        </li>
                        <li>
                          <a href="/"> Latex </a>
                        </li>
                        <li>
                          <a href="/">Coir & Foam </a>
                        </li>
                        <li>
                          <a href="/"> HR Foam </a>
                        </li>
                        <li>
                          <a href="/"> Cool Gel Foam </a>
                        </li>
                        <li>
                          <a href="/"> Rebonded Foam </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Mattress Brands</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Clouddio </a>
                        </li>
                        <li>
                          <a href="/">Sleepyhead</a>
                        </li>
                        <li>
                          <a href="/">Wake-fit </a>
                        </li>
                        <li>
                          <a href="/">springtek</a>
                        </li>
                        <li>
                          <a href="/">Duroflex</a>
                        </li>
                        <li>
                          <a href="/">Durfi </a>
                        </li>
                        <li>
                          <a href="/"> Comforto</a>
                        </li>
                        <li>
                          <a href="/">SleepSpa </a>
                        </li>
                        <li>
                          <a href="/"> Kurl-on</a>
                        </li>
                        <li>
                          <a href="/"> SleepX </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Mattresses.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/"> Furnishings</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Bed Linen</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/"> Bed Sheets </a>
                        </li>
                        <li>
                          <a href="/"> Bedding Sets</a>
                        </li>
                        <li>
                          <a href="/"> Pillows </a>
                        </li>
                        <li>
                          <a href="/"> Pillow Covers</a>
                        </li>
                        <li>
                          <a href="/"> Bed Covers</a>
                        </li>
                        <li>
                          <a href="/"> Diwan Sets</a>
                        </li>
                        <li>
                          <a href="/"> Toppers</a>
                        </li>
                        <li>
                          <a href="/"> Protectors </a>
                        </li>
                        <li>
                          <a href="/"> </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Curtains </header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Door Curtains</a>
                        </li>
                        <li>
                          <a href="/">Window Curtains </a>
                        </li>
                        <li>
                          <a href="/">Blinds & Shades </a>
                        </li>
                        <li>
                          <a href="/">Macrame Curtains</a>
                        </li>
                        <li>
                          <a href="/">Curtain Rods </a>
                        </li>
                        <li>
                          <a href="/"> Tie Backs </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header> Cushion & Covers</header>
                      <ul className="mega-links c">
                        <li>
                          <a href="/"> Decorative Cushions </a>
                        </li>
                        <li>
                          <a href="/">Floor Cushions</a>
                        </li>
                        <li>
                          <a href="/">Cushion Covers </a>
                        </li>
                        <li>
                          <a href="/">Sofa Covers</a>
                        </li>
                        <li>
                          <a href="/">Sofa Throws</a>
                        </li>
                        <li>
                          <a href="/">Chair Pads </a>
                        </li>
                        <li>
                          <a href="/"> Chair Covers</a>
                        </li>
                        <li>
                          <a href="/"> Cushion Inserts </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_furnishing.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">Decor</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wall Art</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Metal Wall Art</a>
                        </li>
                        <li>
                          <a href="/">Wooden Wall Art</a>
                        </li>
                        <li>
                          <a href="/">Paintings</a>
                        </li>
                        <li>
                          <a href="/">Art Panels </a>
                        </li>
                        <li>
                          <a href="/"> Art Prints</a>
                        </li>
                        <li>
                          <a href="/"> Ethnic Art</a>
                        </li>
                        <li>
                          <a href="/">Wall Masks </a>
                        </li>
                        <li>
                          <a href="/"> Faux Animal Busts</a>
                        </li>
                        <li>
                          <a href="/">Wall Plates </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Spiritual</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/"> Mandirs </a>
                        </li>
                        <li>
                          <a href="/"> Pooja Shelves </a>
                        </li>
                        <li>
                          <a href="/"> Religious Idols </a>
                        </li>
                        <li>
                          <a href="/"> Religious Frames </a>
                        </li>
                        <li>
                          <a href="/"> Chowkies </a>
                        </li>
                        <li>
                          <a href="/">Feng Shui </a>
                        </li>
                        <li>
                          <a href="/"> Pooja Essentials </a>
                        </li>
                        <li>
                          <a href="/"> Festive Decor </a>
                        </li>
                        <li>
                          <a href="/">Prayer Mats </a>
                        </li>
                        <li>
                          <a href="/"> Spiritual Coins </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Home Garden</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Pots & Planters </a>
                        </li>
                        <li>
                          <a href="/"> Planter Stands</a>
                        </li>
                        <li>
                          <a href="/">Natural Plants </a>
                        </li>
                        <li>
                          <a href="/"> Artificial Plants</a>
                        </li>
                        <li>
                          <a href="/">Artificial Flowers</a>
                        </li>
                        <li>
                          <a href="/"> Artificial Grass </a>
                        </li>
                        <li>
                          <a href="/">Decorative Pebbles </a>
                        </li>
                        <li>
                          <a href="/"> Garden Figurines </a>
                        </li>
                        <li>
                          <a href="/"> Bird Houses</a>
                        </li>
                        <li>
                          <a href="/"> Gardening Tools</a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Decor.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/"> Lighting</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wall Lights</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Wall Sconces</a>
                        </li>
                        <li>
                          <a href="/">Wall Lanterns</a>
                        </li>
                        <li>
                          <a href="/">Picture Lights</a>
                        </li>
                        <li>
                          <a href="/">Bath Lights</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>LED Lights</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/"> Lamps </a>
                        </li>
                        <li>
                          <a href="/"> Ceiling Lights </a>
                        </li>
                        <li>
                          <a href="/"> Wall Lights </a>
                        </li>
                        <li>
                          <a href="/"> Bulbs and Batten </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Table Lamps</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Table Lamps </a>
                        </li>
                        <li>
                          <a href="/">Study Lamps</a>
                        </li>
                        <li>
                          <a href="/">Table Lanterns </a>
                        </li>
                        <li>
                          <a href="/"> Filament Bulbs</a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Lighting.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">Appliances</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Heating & Cooling</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Air Conditioners</a>
                        </li>
                        <li>
                          <a href="/">Air Coolers</a>
                        </li>
                        <li>
                          <a href="/">Fans</a>
                        </li>
                        <li>
                          <a href="/">Water Geysers </a>
                        </li>
                        <li>
                          <a href="/"> Room Heaters</a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Chimneys</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/"> Wall-Mounted </a>
                        </li>
                        <li>
                          <a href="/"> Island Chimneys </a>
                        </li>
                        <li>
                          <a href="/"> Designer Chimneys </a>
                        </li>
                        <li>
                          <a href="/"> Straight Line </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>OTGs</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/">Microwaves </a>
                        </li>
                        <li>
                          <a href="/">Ovens & OTGs</a>
                        </li>
                        <li>
                          <a href="/">Fryers </a>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d"
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Appliances.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/"> Modular</a>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Modular Kitchens</header>
                      <ul className="mega-links a">
                        <li>
                          <a href="/">Straight Kitchen </a>
                        </li>
                        <li>
                          <a href="/">L Shaped Kitchen </a>
                        </li>
                        <li>
                          <a href="/">Parallel Kitchen</a>
                        </li>
                        <li>
                          <a href="/"> U Shaped Kitchen </a>
                        </li>
                        <li>
                          <a href="/">Island Kitchen </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Modular Wardrobes</header>
                      <ul className="mega-links b">
                        <li>
                          <a href="/"> Hinged Wardrobes </a>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <img
                        alt="imgtag"
                        className="d1"
                        src="https://ii2.pepperfry.com/media/wysiwyg/banners/Modular%206.png"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="last">
              <p>Need Help?</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
