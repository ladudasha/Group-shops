import s from "./ProductCard.module.scss";
import img1 from "./../../assets/images/ProductsCard/img1.png";



function ProductCard(props) {

    const data = {
        title: "Водонепроницаемый Рюкзак",
        img: img1,
        cash: "9 800 ₽",
    }
    return ( 
        <div className={s.container}>
            <div className={s.productCard}>
                <img className={s.productCardImg} src={data.img} alt=""/>
                <h3 className={s.productCardTitle}>{data.title}</h3>
                <span className={s.productCardCash}>{data.cash}</span>
            </div>
        </div>
    );
}

export default ProductCard;