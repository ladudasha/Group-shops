import HeaderListItem from "../../headerListItem/HeaderListItem";
import s from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";





function Header(props) {
   
    return ( 
        <div className={s.container}>
        <div className={s.header}>
            <HeaderTop/>
            <HeaderListItem/>           
        </div>
        </div>
    );
}

export default Header;