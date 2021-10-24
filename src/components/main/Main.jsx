import s from "./Main.module.scss";
import img1 from "./../../assets/images/products/img1.png";
import img2 from "./../../assets/images/products/img2.png";
import img3 from "./../../assets/images/products/img3.png";
import img4 from "./../../assets/images/products/img4.png";
import img5 from "./../../assets/images/products/img5.png";
import img6 from "./../../assets/images/products/img6.png";

import img11 from "./../../assets/images/ProductsCard/img1.png";
import img22 from "./../../assets/images/ProductsCard/img2.png";
import img33 from "./../../assets/images/ProductsCard/img3.png";
import img44 from "./../../assets/images/ProductsCard/img4.png";

import Products from "./../products/Products";
import MainInfo from "./main info/MainInfo";
import ProductsItemsBlock from "../Products-Items-Block/ProductsItemsBlock";
import SearchBlock from './search block/SearchBlock';
import SectionSale from "./section-sale/SectionSale";

import img111 from "./../../assets/images/WithProducts/img1.png";
import img222 from "./../../assets/images/WithProducts/img2.png";
import img333 from "./../../assets/images/WithProducts/img3.png";
import img444 from "./../../assets/images/WithProducts/img4.png";




function Main(props) {
    const data = {
        title: "Квадроциклы",
        img: img1,
        link: "001",
    }

    const data2 = {
        title: "Гидроциклы",
        img: img2,
        link: "002",
    }

    const data3 = {
        title: "Катера",
        img: img3,
        link: "003",
    }

    const data4 = {
        title: "Снегоходы",
        img: img4,
        link: "004",
    }

    const data5 = {
        title: "Вездеходы",
        img: img5,
        link: "005"
    }

    const data6 = {
        title: "Двигатели",
        img: img6,
        link: "006"
    }

    


    const databtn1 = {
        label: "Поиск по  номеру"
    }

    const databtn2 = {
        label: "Поиск по марке"
    }

    const databtn3 = {
        label: "Поиск по названию товара"
    }



    const popularProductsCardData = {

        cardData1: {
            title: "Водонепроницаемый Рюкзак",
            img: img11,
            cash: "9 800 ₽",            
        } ,             
        cardData2: {
            title: "Спасательный жилет BRP Men's Airflow PFD",
            img: img22,
            cash: "6 900 ₽",         
        },
        cardData3: {
            title: "BRP Audio-Premium System",
            img: img33,
            cash: "68 000 ₽",            
        },
        cardData4: {
            title: "Спасательное снаряжение",
            img: img44,  
            cash: "8 000 ₽",
        }
    }


    const otherProductsCardData = {
        cardData1: {
            title: "BRP Audio-портативная система",
            img: img111,  
            cash: "50000 ₽",
        },
        cardData2: {
            title: "Garmin Echomap Plus 62cv",
            img: img222,  
            cash: "45 800 ₽",
        },
        cardData3: {
            title: "RF D.E.S.S.TM Key",
            img: img333,  
            cash: "30000 ₽",
        },
        cardData4: {
            title: "Мужской костюм 3мм",
            img: img444,  
            cash: "7 000 ₽",
        },

    }

   

    return ( 
        <div className={s.main}>

            <MainInfo/>
            <SearchBlock label={databtn1.label}/>
            <Products className={s.products} data={data} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>
            <ProductsItemsBlock cardData={popularProductsCardData}/>
            <SectionSale/>
            <ProductsItemsBlock cardData={otherProductsCardData} style={{display:"none"}}/>
           
        </div>
    );
}

export default Main;