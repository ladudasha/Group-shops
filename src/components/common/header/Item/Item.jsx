import { PATH } from "../../../Routers";
import {NavLink} from "react-router-dom";
import s from "./Item.module.scss";



function Item(props) {
    
    return ( 
        <div className={s.Item}>
            <NavLink to={PATH.CATALOG} className={s.ItemLink}>{props.title}</NavLink>
        </div>
    );
}

export default Item;