import s from "./ProductCard.module.scss";
import basket from "./../../assets/images/ProductsCard/Vector.svg"




function ProductCard(props) {


    return (     
        <div className={s.productCard}>
            <span className={s.label}>SALE</span>
            <input className={s.cardLike} type="checkbox"/>
            <a  className={s.BtnLink} href="">посмотреть товар</a>
            <img className={s.productCardImg} src={props.img} alt=""/>
            <h3 className={s.productCardTitle}>{props.title}</h3>
            <div className={s.isShow}>
                <span className={s.productCardCash}>{props.cash}</span>
                <button className={s.buyBtn}>
                    <img src={basket} alt=""/>
                </button>
            </div>
            <div className={s.isHidden}>
                <p className={s.productCardText}>{props.text}</p>
                <a href="">{props.link}</a>            
            </div>         
        </div>    
    );
}

export default ProductCard;