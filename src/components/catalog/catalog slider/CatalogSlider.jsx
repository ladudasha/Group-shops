import s from './CatalogSlider.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, {
    Grid,Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Grid,Pagination]);
  
  
  export default function CatalogSlider() {
    
    
    return (
        <>
        <Swiper slidesPerView={3} grid={{
      "rows": 2
    }} spaceBetween={30} pagination={{
      "clickable": true
    }} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </>
      )
    }