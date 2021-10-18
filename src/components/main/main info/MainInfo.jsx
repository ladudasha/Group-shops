import BannerSlider from './banner slider/BannerSlider';
import s from './MainInfo.module.scss';
import img1 from './../../../assets/images/mainImages/sliderImg1.png';
import CardStock from './card-stock/CardStock';


function MainInfo(props) {

    const bannerdata = {
        img: img1
    }


    return ( 
        <div className={s.container}>
            <div className={s.MainInfoWrap}>
                <BannerSlider data={bannerdata}/>
                <CardStock/>
            </div>
        </div>
        
    );
}

export default MainInfo;