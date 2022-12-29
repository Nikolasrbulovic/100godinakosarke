import { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import styles from "./photo-slider.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MySlider({player}) {
  const [images, setImages] = useState([]);
  var settings = {
    dots: true
  };
  return (
    <Slider
    className={styles["slider"]}
      dots= {true}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      centerMode={true}
      arrows={true}
      speed={1000}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
    >  
    {player.fields.imageGalery.map((data) => (
      <div key={data.fields.file.url} className={styles["slide"]}><img src={data.fields.file.url} alt={data.fields.title} /></div> 
    ))}
    </Slider> 
  );   

}

export default MySlider;


