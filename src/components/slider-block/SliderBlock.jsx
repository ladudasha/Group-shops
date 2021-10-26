import s from "./SliderBlock.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ProductCard from "../product-card/ProductCard";
import SwiperCore, {
Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
  
export default function SliderBlock(props) {
console.log(props)
  
    return (

      <div className="sliderBlock">
<Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} navigation={true} className="mySwiper">

  <SwiperSlide><ProductCard title={props.cardData.cardData1.title} img={props.cardData.cardData1.img} cash={props.cardData.cardData1.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData2.title} img ={props.cardData.cardData2.img} cash={props.cardData.cardData2.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData3.title} img ={props.cardData.cardData3.img} cash={props.cardData.cardData3.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData4.title} img ={props.cardData.cardData4.img} cash={props.cardData.cardData4.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData1.title} img ={props.cardData.cardData1.img} cash={props.cardData.cardData1.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData2.title} img ={props.cardData.cardData2.img} cash={props.cardData.cardData2.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData3.title} img ={props.cardData.cardData3.img} cash={props.cardData.cardData3.cash} /></SwiperSlide>

  <SwiperSlide><ProductCard title={props.cardData.cardData4.title} img ={props.cardData.cardData4.img} cash={props.cardData.cardData4.cash} /></SwiperSlide>

  </Swiper>
      </div>
    )
  }
