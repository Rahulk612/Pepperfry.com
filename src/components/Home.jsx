
 import  { Header } from  "./Header";
 import { HomeStatic } from "./LandingPage/HomeStatic";
 import {HomeHeroComponent} from "./LandingPage/HomeHeroComponent";
 import { Footer } from "./Footer"
 
 export const Home = () => {
   const item = JSON.parse(localStorage.getItem("buyNowItem"));
   console.log(item)
    return (
     <div>
        <Header/>
        <HomeHeroComponent /> 
       <HomeStatic/>
       <Footer/>
     </div>
   );
 }
 
