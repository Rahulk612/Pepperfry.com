import styles from './homeHeroComponent.module.css';

// const data = [
//     {
//         imgLink: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Home-Fashion-Week_RHS.gif',
//     }
// ]

const OfferColumn = () => {
    return (
        // <div className= {styles.offerColumn}>
        //     {data.map(item => {
        //         return <img className = {styles.imgLink}  src={item.imgLink} alt = "column" />
        //     })}
        // </div>

        <div className= {styles.offerColumn}>
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home-Fashion-Week_RHS.gif" alt="" className = {styles.imgLink} />
        </div>
    )
}

export default OfferColumn;

