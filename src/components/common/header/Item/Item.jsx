import s from "./Item.module.scss";



function Item(props) {
    
    return ( 
        <div className={s.Item}>
            <a className={s.ItemLink} href="#">{props.title}</a>
        </div>
    );
}

export default Item;