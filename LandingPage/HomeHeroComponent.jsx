import OfferColumn from "./OfferColumn";
import PepperFryHomeCarousel from "./PepperFryHomeCarousel"
import styles from './homeHeroComponent.module.css';
import BankBanner from "./BankBanner";

export const HomeHeroComponent = () => {
    return (
        <div className= {styles.homeHeroComponent}>
            <PepperFryHomeCarousel/>
            <OfferColumn/>
            <BankBanner/>
        </div>
    )
}

export default HomeHeroComponent;