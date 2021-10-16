import s from "./ProductCard.module.scss";
import img1 from "./../../assets/images/ProductsCard/img1.png";



function ProductCard(props) {

    const data = {
        // title: "Квадроциклы",
        img: img1,
        // link: "001",
    }
    return ( 
        <div className={s.productCard}>
            <img src={data.img} alt="" />
            <p></p>
            <span></span>
        </div>
    );
}

export default ProductCard;