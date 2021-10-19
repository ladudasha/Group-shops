import s from "./ProductsItemsBlock.module.scss";
import img1 from "./../../assets/images/ProductsCard/img1.png";
import img2 from "./../../assets/images/ProductsCard/img2.png";
import img3 from "./../../assets/images/ProductsCard/img3.png";
import img4 from "./../../assets/images/ProductsCard/img4.png";
import SliderBlock from "../slider-block/SliderBlock";




function ProductsItemsBlock(props) {



const data = {
    title: "Популярные товары",
    btn: "запчасти"
}
const data2 = {
    btn: "моторы"
}
const data3 = {
    btn: "шины"
}
const data4 = {
    btn: "электроника"
}
const data5 = {
    btn: "инструменты"
}
const data6 = {
    btn: "аксессуары"
}

const data7 = {
    title: "Водонепроницаемый Рюкзак",
    img: img1,
    cash: "9 800 ₽",
}
const data8 = {
    title: "Спасательный жилет BRP Men's Airflow PFD",
    img: img2,
    cash: "6 900 ₽",
}
const data9 = {
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
        <div className={s.container}>
            <section className={s.productsItemsBlock}>
                <div className={s.ItemsBlockTop}>
                    <h2 className={s.SectionTitle}>{data.title}</h2>
                    <div className={s.Navigation}>
                        <button className={s.productsItemsBtn}>{data.btn}</button>
                        <button className={s.productsItemsBtn}>{data2.btn}</button>
                        <button className={s.productsItemsBtn}>{data3.btn}</button>
                        <button className={s.productsItemsBtn}>{data4.btn}</button>
                        <button className={s.productsItemsBtn}>{data5.btn}</button>
                        <button className={s.productsItemsBtn}>{data6.btn}</button>
                    </div>
                </div>
                <div className={s.SliderProducts}>
                    <SliderBlock data={data7} data2={data8} data3={data9} data4={dataNo}/>
                </div>
                <button className={s.sectionBtn}>Показать еще</button>
            </section>
        </div>
    );
}

export default ProductsItemsBlock;