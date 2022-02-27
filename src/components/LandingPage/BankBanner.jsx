import styles from './homeHeroComponent.module.css';

const BankBanner = () => {
    return (
        <div className= {styles.bankBanner}>
            <img className= {styles.bankBannerImg} src = "https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_09022022.jpg" alt = "banner"/>
        </div>
    )
}

export default BankBanner;