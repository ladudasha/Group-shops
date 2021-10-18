// import img1 from "./../../assets/images/ProductsCard/img1.png";
import ProductCard from "./../product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
  





export default function SwiperSlider(props) {

//   const data = {
//     title: "Водонепроницаемый Рюкзак",
//     img: img1,
//     cash: "9 800 ₽",
// }
  
    return (
      <>
<Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
      </>
    )
  }
