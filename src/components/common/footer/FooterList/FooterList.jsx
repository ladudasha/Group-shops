import s from "./FooterList.module.scss";



function FooterList(props) {

    return ( 
        <div className={s.container}>
        <div className={s.FooterList}>
        <h2 className={s.title}>{props.title}</h2>
        <a className={s.item} href="#">{props.item1}</a>
        <a className={s.item} href="#">{props.item2}</a>
        <a className={s.item} href="#">{props.item3}</a>
        <a className={s.item} href="#">{props.item4}</a>
        <span className={s.bottom}>{props.bottom}</span>
        </div>
        </div>
    );
}

export default FooterList;