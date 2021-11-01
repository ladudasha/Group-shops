import s from "./ProductCard.module.scss";
import basket from "./../../assets/images/ProductsCard/Vector.svg"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';






function ProductCard(props) {

    return (   
    <div className={s.testClass}>
         <div className={s.productCard}>
            
            <div className={s.productLike}>
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
            </div>

            <span className={s.label}>SALE</span>           
            <a  className={s.BtnLink} href="">посмотреть товар</a>
            <img className={s.productCardImg} src={props.img} alt=""/>
            <h3 className={s.productCardTitle}>{props.title}</h3>
            
            <div className={s.isShow}>
                <span className={s.productCardCash}>{props.cash}</span>
                <button className={s.buyBtn}>
                    <img src={basket} alt=""/>
                </button>
            </div>
            
            <div className={s.amptyProduct}>
                <p className={s.productCardText}>нет в наличии</p>
                <a href="">Сообщить о поступлении</a>            
            </div>         
        </div>    
    </div>  
       
    );
}

export default ProductCard;