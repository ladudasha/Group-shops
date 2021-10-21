import s from "./SliderBlock.scss";
// import img1 from "./../../assets/images/ProductsCard/img1.png";
import ProductCard from "../product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
  





export default function SliderBlock(props) {

//   const data = {
//     title: "Водонепроницаемый Рюкзак",
//     img: img1,
//     cash: "9 800 ₽",
// }
  
    return (
      <>
<Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} navigation={true} className={s.mySwiper}>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data2.title} img ={props.data2.img} cash={props.data2.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data3.title} img ={props.data3.img} cash={props.data3.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data4.title} img ={props.data4.img} text={props.data4.text} link={props.data4.link}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>

  <SwiperSlide><ProductCard title={props.data.title} img ={props.data.img} cash={props.data.cash}/></SwiperSlide>
  </Swiper>
      </>
    )
  }