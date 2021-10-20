import s from "./Footer.module.scss";
import FooterList from "./FooterList/FooterList";
import InputForm from "./Input/InputForm";
import inst from "./../../../assets/images/mainImages/Footer/instagram.svg"
import vk from "./../../../assets/images/mainImages/Footer/vk.svg"
import facebook from "./../../../assets/images/mainImages/Footer/facebook.svg"
import youtube from "./../../../assets/images/mainImages/Footer/youtube.svg"



function Footer(props) {
    const dataList1={
        title: "Информация",
        item1: "О компании",
        item2: "Контакты",
        item3: "Акции",
        item4: "Магазины",
        bottom: "Договор оферты"
    }
    const dataList2={
        title: "Интернет-магазин",
        item1: "Доставка и самовывоз",
        item2: "Оплата",
        item3: "Возврат-обмен",
        item4: "Новости",
        bottom: "Политика обработки персональных данных"
    }
    const formdata={
        placeholder: "Введите ваш e-mail:"
    }

    return ( 
        <div className={s.container}>
        <div className={s.footer}>
            <div className={s.Input}>
                <span className={s.text}>Подпишитесь на нашу рассылку <br /> и узнавайте о акциях быстрее</span>
                <InputForm placeholder={formdata.placeholder}/>
            </div>
            <FooterList title={dataList1.title} item1={dataList1.item1} item2={dataList1.item2} item3={dataList1.item3} item4={dataList1.item4} bottom={dataList1.bottom}/>
            <FooterList title={dataList2.title} item1={dataList2.item1} item2={dataList2.item2} item3={dataList2.item3} item4={dataList2.item4} bottom={dataList2.bottom}/>
            <div className={s.social}>
                <a className={s.socialLink} href="#">
                    <img className={s.socialImg} src={inst} alt="Instagram" />
                </a>
                <a className={s.socialLink} href="#">
                    <img className={s.socialImg} src={vk} alt="VK" />
                </a>
                <a className={s.socialLink} href="#">
                    <img className={s.socialImg} src={facebook} alt="Facebook" />
                </a>
                <a className={s.socialLink} href="#">
                    <img className={s.socialImg} src={youtube} alt="Youtube" />
                </a>
            </div>
        </div>
        </div>
    );
}

export default Footer;