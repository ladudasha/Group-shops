import s from "./ProductDescription.module.scss";
import img111 from "./../../assets/images/WithProducts/magnitofon.png";
import img222 from "./../../assets/images/WithProducts/img2.png";
import img333 from "./../../assets/images/WithProducts/img3.png";
import img444 from "./../../assets/images/WithProducts/img4.png";
import ProductsItemsBlock from "../Products-Items-Block/ProductsItemsBlock";
import TableTop from "../tableTop/TableTop";



const otherProductsCardData = {
    cardData1: {
        title: "BRP Audio-портативная система",
        img: img111,  
        cash: "50 000 ₽",
    },
    cardData2: {
        title: "Garmin Echomap Plus 62cv",
        img: img222,  
        cash: "45 800 ₽",
    },
    cardData3: {
        title: "RF D.E.S.S.TM Key",
        img: img333,  
        cash: "30 000 ₽",
    },
    cardData4: {
        title: "Мужской костюм 3мм",
        img: img444,  
        cash: "7 000 ₽",
    },

}

export default function ProductDescription(props) {
    return (
        <div className={s.productDescription}>
            <div className={s.container}>
                <div className={s.infoContent}>
                    <section className={s.infoProduct}></section>
                    <section className={s.infoTable}>                       
                                         
                        <TableTop/>
                    </section>
                    <section className={s.infoSlider}>
                        <ProductsItemsBlock cardData={otherProductsCardData} style={{display:"none"}}/>                    
                    </section>
                </div>
            </div>    
        </div>
);
}
