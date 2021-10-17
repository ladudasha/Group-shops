
import SwiperSlider from "../swiper/SwiperSlider";
import s from "./ProductsItemsBlock.module.scss";



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
                    <SwiperSlider/>
                </div>
                <button className={s.sectionBtn}>Показать еще</button>
            </section>
        </div>
    );
}

export default ProductsItemsBlock;