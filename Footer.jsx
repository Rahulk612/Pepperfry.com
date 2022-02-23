import {Link} from 'react-router-dom'
import './Footer.css'
 export const Footer = () => {
    return (
<div className='FooterMain' style={{marginTop:"1%"}}>
<footer>
    <div id="footer-wrap">
        <div id="top-footer">    
           
            <div className="container">
                <div className="row">
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                            <h4 id="footer-logo" className="footer-col-heading">Useful Links</h4>                         
                            <ul className="list">
                                <li ><Link to="" ></Link>About Us</li> 
                                <li><Link to="">Our Blog</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Corporate Governance</Link></li>
                                <li><Link to="">Pepperfry In the New</Link></li>
                                <li><Link to="">Find A Studio</Link></li>
                                <li><Link to="">Gift Cards</Link></li>
                                <li><Link to="">Brands</Link></li>
                                <li><Link to="">Customer Reviews</Link></li>
                            </ul>
                        </div>    
                    </div>
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                            <h4 className="footer-col-heading">Partners</h4> 
                            <ul className="list">
                                <li><Link to="">Sell With Us</Link></li>
                                <li><Link to="">Become a Franchisee</Link></li>
                                <li><Link to="">Design For Us</Link></li>
                                <li><Link to="">Pepperfry Marketplace Policies</Link></li>
                                <li><Link to="">Login to Your Merchant Dashboard</Link></li>
                                <li><Link to="">Important : GST and You</Link></li>
                                <li><Link to="">Corporate Enquiries</Link></li> 
                            </ul>
                        </div>    
                    </div>
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                            <h4 className="footer-col-heading">
                                <Link   to="https://www.pepperfry.com/contact-us.html?type=footer">Need Help?</Link>
                            </h4>
                            <ul className="list">
                                <li><Link to="">Contact Us</Link></li>
                                <li><Link to="">Returns Refund</Link></li>
                                <li><Link to="">Track Your Order</Link></li>
                                <li><Link to="">FAQs</Link></li>
                                <li><Link to="">Buy on Phone</Link></li> 
                            </ul>
                        </div>    
                    </div>
                    <div className="bottom-footer-col">
                        <div className="wrap-content">
                            <h4 className="footer-col-heading">Download App</h4>
                            <ul className="store">
                                <li><Link to="https://play.google.com/store/apps/details?id=com.app.pepperfry"><img src="https://zenecosystems.com/wp-content/uploads/2019/02/Google-Play-Icon.png" alt=""/></Link></li>
                                <br/><br/><br/><br/>
                                <li><Link to="https://itunes.apple.com/in/app/pepperfry/id972047429?mt=8"><img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt=""/></Link></li> 
                            </ul>  
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                        <h4 id="footer-logo" className="footer-col-heading">Popular Categories</h4> 
                       <p style={{textAlign:"left"}}>
                        Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outddoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas
                       </p>
                    </div>
                    </div>
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                            <h4 className="footer-col-heading">Popular Brands </h4> 
                            <p style={{textAlign:"left"}}>Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Primorati, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex</p>
                        </div>
                    </div>
                    <div className="top-footer-col">
                        <div className="footer-col-wrapper"> 
                        <h4 className="footer-col-heading">Cities We deliver to</h4> 
                       <p style={{textAlign:"left"}}>Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad, Imphal, Hubli, Guwahati and many more</p>
                    </div> 
                    </div>  
                </div>
            </div>
        </div>
        <hr />
        <div id="bottom-first-footer">
              
            <div className="container">
                <div className="row">
                    <div className="bottom-footer-col">
                        <div className="wrap-content">
                            <h4 className="footer-col-heading">We accept</h4> 
                            <div id="cards-wrap">
                                <div><img src="https://i2.wp.com/www.born-2-fly.de/wp-content/uploads/2020/10/visa-logo.png?ssl=1 " alt="img"/></div>
                                <div><img src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign.png" alt=""/></div>
                                <div><img src="https://www.goodreturns.in/img/2020/07/amexcreditcard1-1595418788.jpg" alt=""/></div>
                                <div><img src="https://trak.in/wp-content/uploads/2020/01/Rupay-Cards-Big-1.jpg" alt=""/></div>
                                {/* <div><img src="https://play-lh.googleusercontent.com/0r42y01w-X5DaJlAv2DgJWQXdYBmjw4o14lZ0Y0v5K7O01nelVbUWLFmA5xqGihf-Ps" alt=""/></div>
                                <div><img src="https://apk4all.com/wp-content/uploads/apps/Wallet-Money-Budget-Finance-Expense-Tracker/DqAKT8mJJWAQMzPuNTFL1CyhwVJkCEfQlv8CGlh7tNLPe81h92T-SwWG6UQLXydpEBNz-1.png" alt=""/></div>
                                <div><img src="https://freepngimg.com/thumb/online_banking/11-2-online-banking-png-image.png" alt=""/></div> */}
                            </div>
                        </div>     
                    </div>
                    
                    <div className="bottom-footer-col">
                        <div className="wrap-content">
                            <h4 className="footer-col-heading">Like what you see? You'll like us even more here</h4>
                            <ul className="social-media-wrap">
                                <li><Link to="https://www.facebook.com/Pepperfry"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt=""/></Link></li>
                                <li><Link to="https://www.instagram.com/pepperfry_official"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt=""/></Link></li>
                                <li><Link to="https://twitter.com/pepperfry"><img src="https://image.flaticon.com/icons/png/512/124/124021.png" alt=""/></Link></li>
                                <li><Link to="https://pinterest.com/pepperfry/"><img src="https://www.veryicon.com/download/png/internet--web/common-social-site-icons-for-the-web/pinterest-57?s=256" alt=""/></Link></li>
                                <li><Link to="https://www.youtube.com/user/Pepperfrytv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWzqSOt9uNTTKvyxRBmIzb05GNRT20ebzbA&usqp=CAU" alt=""/></Link></li>
                            </ul>  
                        </div> 
                    </div>   
                </div>
            </div>
        </div>
    <hr />
          <div id="bottom-last-footer">
            <div className="container">
                <div className="row">
                    <div id="blf-col" className="flex-basis50">
                        <ul>
                            <li><Link to="">Buy In Bulk </Link></li>  
                            <li style={{marginLeft:"3%"}}><Link to="">Write A Testimonial</Link></li>
                        </ul>
                    </div>
                    <div id="blf-col"  className="flex-basis50">
                        <ul>
                            <li><Link to=""></Link>Whitehat</li>
                            <li style={{marginLeft:"3%"}}><Link to=""> Site Map </Link></li>
                            <li style={{marginLeft:"3%"}}><Link to="">Terms Of Use </Link></li>
                            <li style={{marginLeft:"3%"}}><Link to="">Privacy Policy </Link></li>
                            <li style={{marginLeft:"3%"}}><Link to="">Your Data & Security </Link></li>
                            <li style={{marginLeft:"3%"}}><Link to="">Grievance Redressal</Link></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>  
    </div>
</footer>
        </div>
    )
}
