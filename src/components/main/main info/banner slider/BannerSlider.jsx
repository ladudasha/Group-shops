// import "swiper/swiper.scss";

import s from './BannerSlider.css';

import BannerItem from '../banner item/BannerItem';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import 'swiper/css/swiper.css';


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


export default function BannerSlider(props) {
  
  
  
  return (
    <div className="bannerSlider">
    <Swiper cssMode={true} navigation={true} pagination={true} pagination={{  "clickable": true}} mousewheel={true} keyboard={true} className={s.mySwiperBanner}>
        <SwiperSlide className="bannerSlide">
            <BannerItem img={props.data.img}/>
        </SwiperSlide>
        <SwiperSlide className="bannerSlide"><BannerItem img={props.data.img}/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    </div>
  )
  }