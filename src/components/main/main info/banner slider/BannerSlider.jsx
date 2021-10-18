import s from './BannerSlider.module.scss';
import BannerItem from '../banner item/BannerItem';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


export default function BannerSlider(props) {
  
  
  
  return (
    <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        <SwiperSlide><BannerItem img={props.data.img}/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    </>
  )
}