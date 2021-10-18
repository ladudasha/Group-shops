import s from "./Header.module.scss";
import HeaderTop from "./navigation/HeaderTop";



function Header(props) {
    
    return ( 
        <div className={s.container}>
        <div className={s.header}>
            <HeaderTop/>
        </div>
        </div>
    );
}

export default Header;