import React from "react";
import './HomeStatic.css';
import {Link} from "react-router-dom"

export const HomeStatic = () => {

    return (
      <div className="main">
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        <div className="main-one">
          <h1 className="one-head">Shop By Room</h1>
          <div className="one">
            {/* <Link to="/Products/lamps"> */}
            <div
              className="one1"
              onClick={() => {
                window.location.href = "/products/lamps";
              }}
            >
              <img
                className="img1"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1__2x_17022022.jpg"
                alt=""
              />
              <p className="one2">Living Room</p>
            </div>
            {/* </Link> */}
            {/* <Link to="/Products/workfromhome"> */}
            <div
              className="one1"
              onClick={() => {
                window.location.href = "/products/workfromhome";
              }}
            >
              <img
                className="img1"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2__2x_17022022.jpg"
                alt=""
              />
              <p className="one2">Work From Home</p>
            </div>
            {/* </Link> */}
            {/* <Link to="/Products/beds"> */}
            <div
              className="one1"
              onClick={() => {
                window.location.href = "/products/beds";
              }}
            >
              <img
                className="img1"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3__2x_17022022.jpg"
                alt=""
              />
              <p className="one2">Bedroom</p>
            </div>
            {/* </Link> */}
            <div className="one1">
              <img
                className="img1"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4__2x_17022022.jpg"
                alt=""
              />
              <p className="one2">Kids Room</p>
            </div>
          </div>
        </div>
        <div className="main-one">
          <h1 className="one-head">What's Everyone Eyeing?</h1>
          <div className="two">
            <div className="two2">
              <img
                className="img21"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_17022022-new.jpg"
                alt=""
              />
            </div>
            <div className="two2">
              <img
                className="img21"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_17022022-new.jpg"
                alt=""
              />
            </div>
            <div className="two3">
              <img
                className="img22"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_17022022.jpg"
                alt=""
              />
              <img
                className="img22"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_17022022-new.jpg"
                alt=""
              />
              <img
                className="img22 two-space"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_17022022.jpg"
                alt=""
              />
              <img
                className="img22 two-space"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_17022022.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-one">
          <div>
            <div className="main-one-head">
              <h1 className="one-head">Your Pocket-Friendly Shoppee</h1>
            </div>
          </div>

          <div className="five">
            <div className="three1">
              <img
                className="img5"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">
                4 Seater Dinning Sets less than 40K{" "}
              </h6>
              <p className="one2 three-img-head-color">85+ Options</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">King Size Beds less than 30K </h6>
              <p className="one2 three-img-head-color">150+ Options</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_17022022-new.jpg"
                alt=""
              />
              <h6 className="three-head">Coffee Tables less than 10K </h6>
              <p className="one2 three-img-head-color">226+ Options</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Office Chairs less than 8K</h6>
              <p className="one2 three-img-head-color">343+ Options</p>
            </div>
          </div>
        </div>
        <div className="change-color">
          <div className="main-two">
            <div className="three three-space">
              <div className="one1">
                <h1 className="one-head">We’ve Got Your Style</h1>
                <p className="one2 three-text">
                  Your home is a reflection of you. Nail your aesthetic with
                  products our stylists love and recommend
                </p>
                <p className=" one2 three-text three-redcolor">
                  View all Styles
                </p>
              </div>
              <div className="three1">
                <img
                  className="img3"
                  src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_1_2x_17022022.jpg"
                  alt=""
                />
                <h6 className="three-head">Modern</h6>
                <p className="one2 three-img-head-color">Form Meets Function</p>
              </div>
              <div className="three1">
                <img
                  className="img3"
                  src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_2_2x_17022022.jpg"
                  alt=""
                />
                <h6 className="three-head">Traditional</h6>
                <p className="one2 three-img-head-color">Old World Charm</p>
              </div>
              <div className="three1">
                <img
                  className="img3"
                  src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_3_2x_17022022.jpg"
                  alt=""
                />
                <h6 className="three-head">Industrial</h6>
                <p className="one2 three-img-head-color">
                  Perfect Imperfections
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-one main-swiper swiper">
          <div className="main-one-head">
            <h1 className="one-head ">Ready For The New?</h1>
          </div>
          <div className="two swiper-wrapper">
            <div className="three1 swiper-slide">
              <img
                className="img4"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_1_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Scandinavian Collection</h6>
              <p className="one2 three-img-head-color">
                Modern, Minimal & Chic
              </p>
            </div>
            <div className="three1 swiper-slide">
              <img
                className="img4"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Elle Decor Collection</h6>
              <p className="one2 three-img-head-color">Sofas & More</p>
            </div>
            <div className="three1 swiper-slide">
              <img
                className="img4"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_3_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Metalico Collection</h6>
              <p className="one2 three-img-head-color">Sleek End Tables</p>
            </div>
          </div>
        </div>
        <div className="main-one">
          <div>
            <div className="main-one-head">
              <h1 className="one-head">Home Décor You Can't Ignore</h1>
            </div>
          </div>

          <div className="five">
            <div className="three1">
              <img
                className="img5"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Hanging Lights</h6>
              <p className="one2 three-img-head-color">Instant Makeover</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_2_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Metal Wall Art</h6>
              <p className="one2 three-img-head-color">A Sleek Addition</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Pots & Planters</h6>
              <p className="one2 three-img-head-color">Green Is In</p>
            </div>
            <div className="three1">
              <img
                className="img5"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_4_2x_17022022.jpg"
                alt=""
              />
              <h6 className="three-head">Wall Shelves</h6>
              <p className="one2 three-img-head-color">
                Flying Off The Shelves
              </p>
            </div>
          </div>
        </div>
        <div className="main-one">
          <h1 className="one-head">Top Brands To Choose From</h1>
          <div className="six">
            <div className="three1">
              <img
                className="img6"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_1__2x_17022022.jpg"
                alt=""
              />
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_2__2x_17022022.jpg"
                alt=""
              />
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_3__2x_17022022.jpg"
                alt=""
              />
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_3__2x_17022022-1.jpg"
                alt=""
              />
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_5__2x_17022022.jpg"
                alt=""
              />
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_6__2x_17022022.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-one">
          <div className="seven">
            <div className="seven1">
              <img
                className="img7"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/mat-20-jan-1-n-1.jpg"
                alt=""
              />
            </div>
            <div className="seven1">
              <img
                className="img7"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/mod-20-jan-1-n-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <img
            className="img8"
            src="https://ii1.pepperfry.com/images/hp_more_from_store_bg.jpg"
            alt="Snow"
          />
          <div className="main-one">
            <h1 className="one-head top-left">More From The Store</h1>
            <div className="top-left-1">
              <h4 className="text-head">Furniture</h4>
              <div className="text-img">Sofas & Recliners</div>
              <div className="text-img">Seating</div>
              <div className="text-img">Chairs</div>
              <div className="text-img">Beds</div>
              <div className="text-img">Cabinetry</div>
              <div className="text-img">Tables</div>
              <div className="text-img">Dining</div>
              <div className="text-img">Kids & Teens</div>
              <div className="text-img">Home Office</div>
              <div className="text-img">Sofa Chairs</div>
              <div className="text-img">Entertainment Units</div>
              <div className="text-img">Outdoor</div>
              <div className="text-img">Bar Furniture</div>
              <div className="text-img">Furniture & Home Services</div>
            </div>

            <div className="top-left-2">
              <h4 className="text-head"> Sofas & Recliners</h4>
              <div className="text-img">By Size</div>
              <div className="text-img">By Type</div>
              <div className="text-img">By Style</div>
              <div className="text-img">By Material</div>
              <div className="text-img">Sofa Chairs</div>
            </div>

            <div className="bottom-left-1">
              <h4 className="text-head"> Décor</h4>
              <div className="text-img">Wall Shelves & Cabinets</div>
              <div className="text-img">Clocks</div>
              <div className="text-img">Wall Art</div>
              <div className="text-img">Table Décor</div>
              <div className="text-img">Spiritual</div>
              <div className="text-img">Home Garden</div>
              <div className="text-img">Tableware</div>
              <div className="text-img">Kids Décor</div>
              <div className="text-img">Mirrors</div>
            </div>

            <div className="top-left-3">
              <h4 className="text-head">Beds</h4>
              <div className="text-img">By Size</div>
              <div className="text-img">By Storage</div>
              <div className="text-img">Kids & Teens</div>
              <div className="text-img">By Material</div>
              <div className="text-img">By Style</div>
              <div className="text-img">Mattresses</div>
            </div>

            <div className="bottom-left-2">
              <h4 className="text-head">Furnishings</h4>
              <div className="text-img">Bed Linen</div>
              <div className="text-img">Blankets & Comforters</div>
              <div className="text-img">Carpets</div>
              <div className="text-img">Curtains</div>
              <div className="text-img">Cushion & Covers</div>
              <div className="text-img">Bath Linen</div>
              <div className="text-img">Kids Furnishings</div>
              <div className="text-img">Home Services</div>
              <div className="text-img">Flooring</div>
            </div>

            <div className="top-left-4">
              <h4 className="text-head">Cabinetry</h4>
              <div className="text-img">Wardrobes</div>
              <div className="text-img">Shoe Racks</div>
              <div className="text-img">Storage</div>
              <div className="text-img">Entertainment Units</div>
              <div className="text-img">Bar</div>
              <div className="text-img">Kids Storage</div>
              <div className="text-img"></div>
            </div>

            <div className="bottom-left-3">
              <h4 className="text-head">Lighting</h4>
              <div className="text-img">Floor Lamps</div>
              <div className="text-img">Chandeliers</div>
              <div className="text-img">Wall Lights</div>
              <div className="text-img">Smart Lights</div>
              <div className="text-img">Festive Lights</div>
              <div className="text-img">Lampshades</div>
              <div className="text-img">Ceiling Lights</div>
              <div className="text-img">LED Lights</div>
              <div className="text-img">Outdoor Lights</div>
            </div>

            <div className="top-left-5">
              <h4 className="text-head">Appliances</h4>
              <div className="text-img">Mixers & Processors</div>
              <div className="text-img">Breakfast Appliances</div>
              <div className="text-img">Chimneys</div>
              <div className="text-img">Built-in Appliances</div>
              <div className="text-img">Heating & Cooling Appliances</div>
              <div className="text-img">Cleaning</div>
              <div className="text-img">Refrigerators</div>
              <div className="text-img">OTGs</div>
              <div className="text-img">Food Makers</div>
              <div className="text-img">Cooktops</div>
              <div className="text-img">Bar Appliances</div>
              <div className="text-img">Purifiers</div>
              <div className="text-img">Laundry</div>
              <div className="text-img">Televisions</div>
            </div>
          </div>
        </div>
        <div className="main-one">
          <h1 className="one-head">Happy Customers, Happy Us</h1>

          <div className="two">
            <div className="eight1">
              <img
                className="img9"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg"
                alt=""
              />
              <p className="eight-text">
                Bought these two grey puffy stools from pepperfry. Found them to
                be surprisingly strong! Blends perfectly with our theme, too!
              </p>
              <p className="eight-below-text">Suman Senapatia</p>
              <p className="one2 three-img-head-color eight-below-text-2">
                Visakhapatnam
              </p>
            </div>
            <div className="eight1">
              <img
                className="img9"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_8.jpg"
                alt=""
              />
              <p className="eight-text">
                I purchased Candy Study Chair in Pink Colour by Alex Daisy from
                pepperfry looks awesome and My daughter loves and spend most of
                the time during her home school sessions. I am happy with my
                choice to give a Gift to my daughter.
              </p>
              <p className="eight-below-text">Satya Madhana</p>
              <p className="one2 three-img-head-color eight-below-text-2">
                Secunderabad
              </p>
            </div>
            <div className="eight1">
              <img
                className="img9"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg"
                alt=""
              />
              <p className="eight-text">
                Purchased an ergonomic chair, I thought it would not be fitting
                for me but once it got delivered, got it assembled then and
                there. Now, I am just loving it. Will suggest pepperfry.
              </p>
              <p className="eight-below-text">Baba Kattubadi</p>
              <p className="one2 three-img-head-color  eight-below-text-2">
                Hyderabad
              </p>
            </div>
          </div>
        </div>
        <div className="main-one">
          <div className="main-one-head">
            <span>
              <h1 className="one-head">Need Help Buying?</h1>
            </span>
            <span className="last-color">View all</span>
          </div>

          <div className="six">
            <div className="three1">
              <img
                className="img6"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg"
                alt=""
              />
              <p className="eight-below-text">
                Here's How To Choose The Right Sofa
              </p>
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg"
                alt=""
              />
              <p className="eight-below-text">
                How To Buy A Perfect Bed For Your Room
              </p>
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg"
                alt=""
              />
              <p className="eight-below-text">
                Your Guide To Buy The Perfect Mattress
              </p>
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg"
                alt=""
              />
              <p className="eight-below-text">
                EverythingAbout Cabinets And Sideboards
              </p>
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg"
                alt=""
              />
              <p className="eight-below-text">
                What To Look For While Buying A Chair
              </p>
            </div>
            <div className="three1">
              <img
                className="img6"
                src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
}
