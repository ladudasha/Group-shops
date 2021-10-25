import s from "./ProductsItemsBlock.module.scss";
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