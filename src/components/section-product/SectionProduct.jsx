import { NavLink } from "react-router-dom";
import s from "./SectionProduct.module.scss";



function SectionProduct(props) {
        return (
            <article className={s.sectionProduct}>
            <div>
                <h1>{props.title}</h1>
                <NavLink className={s.textLight} to={props.link}>Подробнее</NavLink> 
            </div>
            <img src={props.img} alt="" />
            </article>
        );
}

export default SectionProduct;