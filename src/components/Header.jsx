import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate()

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
            <img src="https://i.imgur.com/KQ0SkcM.png" alt="" />
          </Link>
          <div className="img12">
            <Link to="/products/seettes" className="nam">
              SHOP
            </Link>
            <Link to="/" className="nam">
              GET INSPIRED
            </Link>
            <Link to="/" className="nam">
              PARTNER
            </Link>
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
                    style={{ marginTop: "50px", marginLeft: "40px" }}
                    onSubmit={(e) => {
                      e.preventDefault();
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
                      <Link
                        to="https://www.pepperfry.com/terms-of-use.html"
                        id="TnC"
                      >
                        Terms & Conditions
                      </Link>
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
                <Link to="/products/beds">Furniture</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Sofas</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">3 Seater sofas</Link>
                        </li>
                        <li>
                          <Link to="/">2 Seater Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">1 seater Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Sofa Sets</Link>
                        </li>
                        <li>
                          <Link to="/">Sectional Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Recliners </Link>
                        </li>
                        <li>
                          <Link to="/">Chaise Loungers</Link>
                        </li>
                        <li>
                          <Link to="/">Sofa Cum Beds </Link>
                        </li>
                        <li>
                          <Link to="/">Futons </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Seating</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/">Settees</Link>
                        </li>
                        <li>
                          <Link to="/">Benches</Link>
                        </li>
                        <li>
                          <Link to="/">Ottomans</Link>
                        </li>
                        <li>
                          <Link to="/">Pouffes</Link>
                        </li>
                        <li>
                          <Link to="/">Recamiers</Link>
                        </li>
                        <li>
                          <Link to="/">Foot Stools</Link>
                        </li>
                        <li>
                          <Link to="/">Seating Stools </Link>
                        </li>
                        <li>
                          <Link to="/">Bean Bags</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Chairs</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Arm Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Rocking Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Cantilever Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Folding Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Iconic Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Cafe Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Dining Chairs </Link>
                        </li>
                        <li>
                          <Link to="/">Office Chairs</Link>
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
                <Link to="/products/seettes">Sofas & Recliners</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>By Size</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">3 Seater Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">2 Seater sofas</Link>
                        </li>
                        <li>
                          <Link to="/">1 Seater Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Sectional Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Sofa Sets</Link>
                        </li>
                        <li>
                          <Link to="/">1 Seater Recliners</Link>
                        </li>
                        <li>
                          <Link to="/">2 Seater Recliners </Link>
                        </li>
                        <li>
                          <Link to="/">3 Seater Recliners</Link>
                        </li>
                        <li>
                          <Link to="/">Recliner Sets </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>By Type</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Corner Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Modular Sofas</Link>
                        </li>
                        <li>
                          <Link to="/">Sofa cum Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Futons</Link>
                        </li>
                        <li>
                          <Link to="/">Chaise Loungers</Link>
                        </li>
                        <li>
                          <Link to="/">Recliners</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Sofa Chairs</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/">Lounge Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Wing Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Barrel Chairs</Link>
                        </li>
                        <li>
                          <Link to="/">Slipper Chairs</Link>
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
                <Link to="/"> Cabinetry</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wardrobes</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">1 Door Wardrobes</Link>
                        </li>
                        <li>
                          <Link to="/">2 Door Wardrobes</Link>
                        </li>
                        <li>
                          <Link to="/">3 Door Wardrobes</Link>
                        </li>
                        <li>
                          <Link to="/">4 Door Wardrobes</Link>
                        </li>
                        <li>
                          <Link to="/">Fabric </Link>
                        </li>
                        <li>
                          <Link to="/">Futons</Link>
                        </li>
                        <li>
                          <Link to="/">Kids Wardrobes </Link>
                        </li>
                        <li>
                          <Link to="/">Fabric Wardrobes</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Storage</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Book Shelves</Link>
                        </li>
                        <li>
                          <Link to="/">Book Cases</Link>
                        </li>
                        <li>
                          <Link to="/">Chest of Drawers</Link>
                        </li>
                        <li>
                          <Link to="/">Trunks</Link>
                        </li>
                        <li>
                          <Link to="/">Plastic Cabinets</Link>
                        </li>
                        <li>
                          <Link to="/">Office Cabinets</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Kids Storage</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/">Book Shelves</Link>
                        </li>
                        <li>
                          <Link to="/">Book Cases</Link>
                        </li>
                        <li>
                          <Link to="/">Drawers</Link>
                        </li>
                        <li>
                          <Link to="/"> Baskets</Link>
                        </li>
                        <li>
                          <Link to="/">Boxes </Link>
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
                <Link to="/">Beds</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Kids & Teens</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Cribs</Link>
                        </li>
                        <li>
                          <Link to="/">Single Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Double Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Trundle Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Bookcase Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Novelty Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Tent Beds</Link>
                        </li>
                        <li>
                          <Link to="/">Bed Units</Link>
                        </li>
                        <li>
                          <Link to="/">Bunk Beds</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Mattresses</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Single Bed Mattress</Link>
                        </li>
                        <li>
                          <Link to="/"> Queen Bed Mattress</Link>
                        </li>
                        <li>
                          <Link to="/"> King Bed Mattress</Link>
                        </li>
                        <li>
                          <Link to="/"> Baby Mattress</Link>
                        </li>
                        <li>
                          <Link to="/"> Kids Mattress </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>By Style</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/">Modern </Link>
                        </li>
                        <li>
                          <Link to="/">Mid-Century</Link>
                        </li>
                        <li>
                          <Link to="/"> Contemporary </Link>
                        </li>
                        <li>
                          <Link to="/"> Transitional</Link>
                        </li>
                        <li>
                          <Link to="/">Mission</Link>
                        </li>
                        <li>
                          <Link to="/">Industrial </Link>
                        </li>
                        <li>
                          <Link to="/">Platform </Link>
                        </li>
                        <li>
                          <Link to="/">Poster Beds </Link>
                        </li>
                        <li>
                          <Link to="/">Industrial </Link>
                        </li>
                        <li>
                          <Link to="/">Folding Beds </Link>
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
                <Link to="/">Mattresses</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Mattresses</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/"> Mattress Sizes</Link>
                        </li>
                        <li>
                          <Link to="/">Foldable Mattress</Link>
                        </li>
                        <li>
                          <Link to="/"> Baby Mattress</Link>
                        </li>
                        <li>
                          <Link to="/">Kids Mattress</Link>
                        </li>
                        <li>
                          <Link to="/">Mattress Protectors</Link>
                        </li>
                        <li>
                          <Link to="/">Mattress Toppers</Link>
                        </li>
                        <li>
                          <Link to="/">Pillows</Link>
                        </li>
                        <li>
                          <Link to="/">Bed Wedges </Link>
                        </li>
                        <li>
                          <Link to="/">Mattress Steaming </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Mattress Type</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Coir</Link>
                        </li>
                        <li>
                          <Link to="/">Foam </Link>
                        </li>
                        <li>
                          <Link to="/">Memory Foam </Link>
                        </li>
                        <li>
                          <Link to="/">Bonnell Spring</Link>
                        </li>
                        <li>
                          <Link to="/">Pocket Spring </Link>
                        </li>
                        <li>
                          <Link to="/"> Latex </Link>
                        </li>
                        <li>
                          <Link to="/">Coir & Foam </Link>
                        </li>
                        <li>
                          <Link to="/"> HR Foam </Link>
                        </li>
                        <li>
                          <Link to="/"> Cool Gel Foam </Link>
                        </li>
                        <li>
                          <Link to="/"> Rebonded Foam </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Mattress Brands</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Clouddio </Link>
                        </li>
                        <li>
                          <Link to="/">Sleepyhead</Link>
                        </li>
                        <li>
                          <Link to="/">Wake-fit </Link>
                        </li>
                        <li>
                          <Link to="/">springtek</Link>
                        </li>
                        <li>
                          <Link to="/">Duroflex</Link>
                        </li>
                        <li>
                          <Link to="/">Durfi </Link>
                        </li>
                        <li>
                          <Link to="/"> Comforto</Link>
                        </li>
                        <li>
                          <Link to="/">SleepSpa </Link>
                        </li>
                        <li>
                          <Link to="/"> Kurl-on</Link>
                        </li>
                        <li>
                          <Link to="/"> SleepX </Link>
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
                <Link to="/"> Furnishings</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Bed Linen</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/"> Bed Sheets </Link>
                        </li>
                        <li>
                          <Link to="/"> Bedding Sets</Link>
                        </li>
                        <li>
                          <Link to="/"> Pillows </Link>
                        </li>
                        <li>
                          <Link to="/"> Pillow Covers</Link>
                        </li>
                        <li>
                          <Link to="/"> Bed Covers</Link>
                        </li>
                        <li>
                          <Link to="/"> Diwan Sets</Link>
                        </li>
                        <li>
                          <Link to="/"> Toppers</Link>
                        </li>
                        <li>
                          <Link to="/"> Protectors </Link>
                        </li>
                        <li>
                          <Link to="/"> </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Curtains </header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Door Curtains</Link>
                        </li>
                        <li>
                          <Link to="/">Window Curtains </Link>
                        </li>
                        <li>
                          <Link to="/">Blinds & Shades </Link>
                        </li>
                        <li>
                          <Link to="/">Macrame Curtains</Link>
                        </li>
                        <li>
                          <Link to="/">Curtain Rods </Link>
                        </li>
                        <li>
                          <Link to="/"> Tie Backs </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header> Cushion & Covers</header>
                      <ul className="mega-links c">
                        <li>
                          <Link to="/"> Decorative Cushions </Link>
                        </li>
                        <li>
                          <Link to="/">Floor Cushions</Link>
                        </li>
                        <li>
                          <Link to="/">Cushion Covers </Link>
                        </li>
                        <li>
                          <Link to="/">Sofa Covers</Link>
                        </li>
                        <li>
                          <Link to="/">Sofa Throws</Link>
                        </li>
                        <li>
                          <Link to="/">Chair Pads </Link>
                        </li>
                        <li>
                          <Link to="/"> Chair Covers</Link>
                        </li>
                        <li>
                          <Link to="/"> Cushion Inserts </Link>
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
                <Link to="/">Decor</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wall Art</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Metal Wall Art</Link>
                        </li>
                        <li>
                          <Link to="/">Wooden Wall Art</Link>
                        </li>
                        <li>
                          <Link to="/">Paintings</Link>
                        </li>
                        <li>
                          <Link to="/">Art Panels </Link>
                        </li>
                        <li>
                          <Link to="/"> Art Prints</Link>
                        </li>
                        <li>
                          <Link to="/"> Ethnic Art</Link>
                        </li>
                        <li>
                          <Link to="/">Wall Masks </Link>
                        </li>
                        <li>
                          <Link to="/"> Faux Animal Busts</Link>
                        </li>
                        <li>
                          <Link to="/">Wall Plates </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Spiritual</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/"> Mandirs </Link>
                        </li>
                        <li>
                          <Link to="/"> Pooja Shelves </Link>
                        </li>
                        <li>
                          <Link to="/"> Religious Idols </Link>
                        </li>
                        <li>
                          <Link to="/"> Religious Frames </Link>
                        </li>
                        <li>
                          <Link to="/"> Chowkies </Link>
                        </li>
                        <li>
                          <Link to="/">Feng Shui </Link>
                        </li>
                        <li>
                          <Link to="/"> Pooja Essentials </Link>
                        </li>
                        <li>
                          <Link to="/"> Festive Decor </Link>
                        </li>
                        <li>
                          <Link to="/">Prayer Mats </Link>
                        </li>
                        <li>
                          <Link to="/"> Spiritual Coins </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Home Garden</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Pots & Planters </Link>
                        </li>
                        <li>
                          <Link to="/"> Planter Stands</Link>
                        </li>
                        <li>
                          <Link to="/">Natural Plants </Link>
                        </li>
                        <li>
                          <Link to="/"> Artificial Plants</Link>
                        </li>
                        <li>
                          <Link to="/">Artificial Flowers</Link>
                        </li>
                        <li>
                          <Link to="/"> Artificial Grass </Link>
                        </li>
                        <li>
                          <Link to="/">Decorative Pebbles </Link>
                        </li>
                        <li>
                          <Link to="/"> Garden Figurines </Link>
                        </li>
                        <li>
                          <Link to="/"> Bird Houses</Link>
                        </li>
                        <li>
                          <Link to="/"> Gardening Tools</Link>
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
                <Link to="/"> Lighting</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Wall Lights</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Wall Sconces</Link>
                        </li>
                        <li>
                          <Link to="/">Wall Lanterns</Link>
                        </li>
                        <li>
                          <Link to="/">Picture Lights</Link>
                        </li>
                        <li>
                          <Link to="/">Bath Lights</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>LED Lights</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/"> Lamps </Link>
                        </li>
                        <li>
                          <Link to="/"> Ceiling Lights </Link>
                        </li>
                        <li>
                          <Link to="/"> Wall Lights </Link>
                        </li>
                        <li>
                          <Link to="/"> Bulbs and Batten </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>Table Lamps</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Table Lamps </Link>
                        </li>
                        <li>
                          <Link to="/">Study Lamps</Link>
                        </li>
                        <li>
                          <Link to="/">Table Lanterns </Link>
                        </li>
                        <li>
                          <Link to="/"> Filament Bulbs</Link>
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
                <Link to="/">Appliances</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Heating & Cooling</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Air Conditioners</Link>
                        </li>
                        <li>
                          <Link to="/">Air Coolers</Link>
                        </li>
                        <li>
                          <Link to="/">Fans</Link>
                        </li>
                        <li>
                          <Link to="/">Water Geysers </Link>
                        </li>
                        <li>
                          <Link to="/"> Room Heaters</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Chimneys</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/"> Wall-Mounted </Link>
                        </li>
                        <li>
                          <Link to="/"> Island Chimneys </Link>
                        </li>
                        <li>
                          <Link to="/"> Designer Chimneys </Link>
                        </li>
                        <li>
                          <Link to="/"> Straight Line </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="rowone">
                      <header>OTGs</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/">Microwaves </Link>
                        </li>
                        <li>
                          <Link to="/">Ovens & OTGs</Link>
                        </li>
                        <li>
                          <Link to="/">Fryers </Link>
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
                <Link to="/"> Modular</Link>
                <div className="mega-box">
                  <div className="content">
                    <div className="rowone">
                      <header>Modular Kitchens</header>
                      <ul className="mega-links a">
                        <li>
                          <Link to="/">Straight Kitchen </Link>
                        </li>
                        <li>
                          <Link to="/">L Shaped Kitchen </Link>
                        </li>
                        <li>
                          <Link to="/">Parallel Kitchen</Link>
                        </li>
                        <li>
                          <Link to="/"> U Shaped Kitchen </Link>
                        </li>
                        <li>
                          <Link to="/">Island Kitchen </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="rowone">
                      <header>Modular Wardrobes</header>
                      <ul className="mega-links b">
                        <li>
                          <Link to="/"> Hinged Wardrobes </Link>
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
