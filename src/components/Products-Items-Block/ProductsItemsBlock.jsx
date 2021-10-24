import s from "./ProductsItemsBlock.module.scss";
// import img1 from "./../../assets/images/ProductsCard/img1.png";
// import img2 from "./../../assets/images/ProductsCard/img2.png";
// import img3 from "./../../assets/images/ProductsCard/img3.png";
// import img4 from "./../../assets/images/ProductsCard/img4.png";
import SliderBlock from "../slider-block/SliderBlock";
import SectionItemTop from "../section-item-top/SectionItemTop";





function ProductsItemsBlock(props) {
    return ( 
        
            <section className={s.productsItemsBlock}>
                <div className={s.container}>
                    <SectionItemTop/>                
                <div className={s.SliderProducts} >
                    <SliderBlock cardData={props.cardData}/>
                </div>
                <button style={props.style} className={s.sectionBtn}>Показать еще</button>
                </div>
            </section>
        
    );
}

export default ProductsItemsBlock;