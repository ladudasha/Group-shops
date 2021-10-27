
import BasicBreadcrumbs from "../basic breadcrumbs/BasicBreadcrumbs";
import CatalogSlider from "./catalog slider/CatalogSlider";
import s from "./Catalog.module.scss";

import img31 from './../../assets/images/catalogImages/img31.png';
import img32 from './../../assets/images/catalogImages/img32.png';
import img33 from './../../assets/images/catalogImages/img33.png';
import img34 from './../../assets/images/catalogImages/img34.png';
import img35 from './../../assets/images/catalogImages/img35.png';
import img36 from './../../assets/images/catalogImages/img36.png';
import img37 from './../../assets/images/catalogImages/img37.png';
import img38 from './../../assets/images/catalogImages/img38.png';
import img39 from './../../assets/images/catalogImages/img39.png';
import img40 from './../../assets/images/catalogImages/img40.png';
import img41 from './../../assets/images/catalogImages/img41.png';
import img42 from './../../assets/images/catalogImages/img42.png';

import CatalogLeft from "../catalog-left/CatalogLeft";

function Catalog(props) {

    const catalogdata1 = {
        title: "Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango",
        img: img31,
        cash: "1 049 500 ₽" ,           
    }
    const catalogdata2 = {
        title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        img: img32,
        cash: "1 100 475 ₽" ,           
    }
    const catalogdata3 = {
        title: "Гидроцикл BRP SeaDoo GTR 230hp X California green ",
        img: img33,
        cash: "1 323 700 ₽" ,           
    }
    const catalogdata4 = {
        title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream ",
        img: img34,
        cash: "1 323 700 ₽" ,           
    }
    const catalogdata5 = {
        title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal ",
        img: img35,
        cash: "1 543 000 ₽" ,           
    }
    const catalogdata6 = {
        title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
        img: img36,
        cash: "732 345 ₽" ,           
    }
    const catalogdata7 = {
        title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
        img: img37,
        cash: "857 666 ₽" ,           
    }
    const catalogdata8 = {
        title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
        img: img38,
        cash: "1 229 711 ₽",
    }  
    const catalogdata9 = {
        title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
        img: img39,
        cash: "587 440 ₽",
    } 
    const catalogdata10 = {
        title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",
        img: img40,
        cash: "587 440 ₽",
    }
    const catalogdata11 = {
        title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",
        img: img41,
        cash: "587 440 ₽",
    }
    const catalogdata12 = {
        title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
        img: img42,
        cash: "587 440 ₽",
    }



    return ( 
        <div className={s.catalog}>
            <div className={s.container}>
                <div className={s.catalogContent}>

                    <div className={s.catalogTop}>
                        <BasicBreadcrumbs/>
                        <h1 id="jetSkis">Гидроциклы</h1>
                    </div>
                        
                    <sidebar className={s.filterProductsBlock}><CatalogLeft/></sidebar>

                    <div className={s.catalogCards}>Catalog
                        <CatalogSlider data1={catalogdata1}  data2={catalogdata2} data3={catalogdata3} data4={catalogdata4} data5={catalogdata5} data6={catalogdata6} data7={catalogdata7} data8={catalogdata8} data9={catalogdata9} data10={catalogdata10} data11={catalogdata11} data12={catalogdata12}/>
                    </div>

                    <div className={s.paginationPages}>pagination pages???</div>
                </div>
                
            </div>
        </div>
    );
}

export default Catalog;