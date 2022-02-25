import './Login.css';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom'

 export const Login = () => {
    return (
      <>
      <Header/>
           
             <div id='left1'>
              <img id='pic' src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec_09022022.jpg" alt="" />  
             </div>
             <div id='right1'>
             <form  style={{marginTop:"50px"}}>
             <input type="text" placeholder='Email ID' className='FT'/>
             <br /><br /><br />
             <input type="password" placeholder='Password'className='FT' />
             <br /><br /><br />
             <Link to="/"><button id='buttn'>Login</button></Link>
             <p style={{fontSize:"13px",marginTop:"5px"}}>By registering you agree to our <a href="https://www.pepperfry.com/terms-of-use.html" id='TnC'>Terms & Conditions</a></p>
             </form>
         </div>
           
      <Footer/>
       </>
    )
}