import BannerSlider from './banner slider/BannerSlider';
import s from './MainInfo.module.scss';
import img1 from './../../../assets/images/mainImages/mainInfo/sliderImg1.png';
// import imgStock from "./../../assets/images/mainImages/mainInfo/motorStock.png";
import CardStock from './card-stock/CardStock';


function MainInfo(props) {

    const bannerdata = {
        img: img1
    }

    

    return ( 
        <div className={s.container}>
            <div className={s.MainInfoWrap}>
                <BannerSlider data={bannerdata}/>
                <CardStock newPrace={props.data.newPrace} oldPrace={props.data.oldPrace} img={props.data.img} title={props.data.title} date={props.data.date}/>
            </div>
        </div>
        
    );
}

export default MainInfo;