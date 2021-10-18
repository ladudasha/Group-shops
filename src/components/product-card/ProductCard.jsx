import s from "./ProductCard.module.scss";
// import img1 from "./../../assets/images/ProductsCard/img1.png";



function ProductCard(props) {

    // const data = {
    //     title: "Водонепроницаемый Рюкзак",
    //     img: img1,
    //     cash: "9 800 ₽",
    // }
    return ( 
        <div className={s.container}>
            <div className={s.productCard}>
                <img className={s.productCardImg} src={props.img} alt=""/>
                <h3 className={s.productCardTitle}>{props.title}</h3>
                <span className={s.productCardCash}>{props.cash}</span>
            </div>
        </div>
    );
}

export default ProductCard;