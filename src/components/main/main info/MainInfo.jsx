import BannerSlider from './banner slider/BannerSlider';
import s from './MainInfo.module.scss';
import img1 from './../../../assets/images/mainImages/mainInfo/sliderImg1.png';
// import imgStock from "./../../assets/images/mainImages/mainInfo/motorStock.png";
import CardStock from './card-stock/CardStock';


function MainInfo(props) {

    const bannerdata = {
        img: img1
    }

    const stockdata = {
        newPrace: "190 000",
        oldPrace: "225 000",
        // stockImg: imgStock,
        stockTitle: "Лодочный мотор Suzuki DF9.9BRS",
        stockDate: "31.08.2020"
    }

    return ( 
        <div className={s.container}>
            <div className={s.MainInfoWrap}>
                <BannerSlider data={bannerdata}/>
                <CardStock data={stockdata}/>
            </div>
        </div>
        
    );
}

export default MainInfo;