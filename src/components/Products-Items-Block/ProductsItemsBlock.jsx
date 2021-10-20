import s from "./ProductsItemsBlock.module.scss";
import img1 from "./../../assets/images/ProductsCard/img1.png";
import img2 from "./../../assets/images/ProductsCard/img2.png";
import img3 from "./../../assets/images/ProductsCard/img3.png";
import img4 from "./../../assets/images/ProductsCard/img4.png";
import SliderBlock from "../slider-block/SliderBlock";
import SectionItemTop from "../section-item-top/SectionItemTop";




function ProductsItemsBlock(props) {


const cardData = {
    title: "Водонепроницаемый Рюкзак",
    img: img1,
    cash: "9 800 ₽",
}
const cardData2 = {
    title: "Спасательный жилет BRP Men's Airflow PFD",
    img: img2,
    cash: "6 900 ₽",
}
const cardData3 = {
    title: "BRP Audio-Premium System",
    img: img3,
    cash: "68 000 ₽",
}
const dataNo = {
    title: "Спасательное снаряжение",
    img: img4,

    text: "нет в наличии",
    link: "Сообщить о поступлении"
    

}


    return ( 
        
            <section className={s.productsItemsBlock}>
                <div className={s.container}>
                    <SectionItemTop/>                
                <div className={s.SliderProducts}>
                    <SliderBlock data={cardData} data2={cardData2} data3={cardData3} data4={dataNo}/>
                </div>
                <button className={s.sectionBtn}>Показать еще</button>
                </div>
            </section>
        
    );
}

export default ProductsItemsBlock;