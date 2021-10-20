import s from "./SectionItemTop.module.scss";



function SectionItemTop(props) {
    return ( 
        <div className={s.sectionItemTop}>
        
                    <h2 className={s.sectionTitle}>Популярные товары</h2>
                    <div className={s.navigation}>
                        <button className={s.productsItemsBtn}>запчасти</button>
                        <button className={s.productsItemsBtn}>моторы</button>
                        <button className={s.productsItemsBtn}>шины</button>
                        <button className={s.productsItemsBtn}>электроника</button>
                        <button className={s.productsItemsBtn}>инструменты</button>
                        <button className={s.productsItemsBtn}>аксессуары</button>
                    </div>
                </div>
    
    );
}

export default SectionItemTop;