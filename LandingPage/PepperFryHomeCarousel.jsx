import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import styles from './homeHeroComponent.module.css';

const Button = styled.button`
  margin: 10px 5px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? "#000000" : "#c4c4c4")};
`;

const items = [
  {
    source:
      "https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_Web_2X_21022022_ex.jpg"
  },
  {
    source:
      "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_210222.jpg"
  },
  {
    source:
      "https://ii3.pepperfry.com/media/wysiwyg/banners/HB03_Web_210222.jpg"
  },

  {
    source:
      "https://ii1.pepperfry.com/media/wysiwyg/banners/HB04_Web_210222.jpg"
  }
];

export default function PepperFryHomeCarousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  const next = () => {
    if (activeItemIndex + 1 <= items.length - 1) {
      carouselRef.current.goTo(activeItemIndex + 1);
      setActiveItemIndex(activeItemIndex + 1);
    } else if (activeItemIndex + 1 === items.length) {
      setActiveItemIndex(0);
      carouselRef.current.goTo(0);
    }
  };
  return (
    
    <div className= {styles.pepperFryCarousel} >
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        showArrows={false}
        pagination={false}
        enableAutoPlay
        autoPlaySpeed={4000}
        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
      >
        {items.map((item, i) => (
          <div key={i}>
            <div style={{ width:"100%",height:"100%", marginLeft:"10px"}}>
              <img src={item.source} alt="splash" width="100%" height = '100%'/>
            </div>
          </div>
        ))}
      </Carousel>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {items.map((_, i) => (
          <div>
            <Button
              key={i}
              active={i === activeItemIndex}
              onClick={() => carouselRef.current.goTo(i)}
            />
          </div>
        ))}
      </div>
    </div>
        
        
  );
}
