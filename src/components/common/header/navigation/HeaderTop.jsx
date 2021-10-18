import s from "./HeaderTop.module.scss";
import logo from "./../../../../assets/images/mainImages/Header/logo.svg";
import geo from "./../../../../assets/images/mainImages/Header/geo.svg";
import like from "./../../../../assets/images/mainImages/Header/like.svg";
import profile from "./../../../../assets/images/mainImages/Header/profile.svg";
import basket from "./../../../../assets/images/mainImages/Header/basket.svg";



function HeaderTop(props) {
    return ( 
        <div className={s.headerTop}>
            <div className={s.navigationWrapper}>
            <nav className={s.navigation}>
                <a className={s.navigationItem} href="#">Магазины</a>
                <a className={s.navigationItem} href="#">Акции</a>
                <a className={s.navigationItem} href="#">Доставка и оплата</a>
            </nav>
            </div>
            <div className={s.logoWrapper}>
            <img className={s.logo} src={logo} alt="Logo" />
            </div>
            <div className={s.addressWrapper}>
                <img className={s.geo} src={geo} alt="Geo" />
                <span className={s.address}>Москва,  ул. Науки  25</span>
            </div>
            <div className={s.icons}>
                <img className={s.icon1} src={like} alt="Like" />
                <img className={s.icon2} src={profile} alt="Profile" />
                <img className={s.icon3} src={basket} alt="Basket" />
            </div>
        </div>

    );
}

export default HeaderTop;