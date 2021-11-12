import s from "./ProductDescription.module.scss";
import img111 from "./../../assets/images/WithProducts/magnitofon.png";
import img222 from "./../../assets/images/WithProducts/img2.png";
import img333 from "./../../assets/images/WithProducts/img3.png";
import img444 from "./../../assets/images/WithProducts/img4.png";
import ProductsItemsBlock from "../Products-Items-Block/ProductsItemsBlock";
import SeachShop from "../seachShop/SeachShop";
import InfoProduct from './../info-product/InfoProduct.jsx';
import TableBlock from "../common/table-block/TableBlock";
import DenseTable from "../common/table-block/TableBlock";
import NavAboutProduct from "../navAboutProduct/NavAboutProduct";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const otherProductsCardData = {
    cardData1: {
        title: "BRP Audio-портативная система",
        img: img111,  
        cash: "50 000 ₽",
    },
    cardData2: {
        title: "Garmin Echomap Plus 62cv",
        img: img222,  
        cash: "45 800 ₽",
    },
    cardData3: {
        title: "RF D.E.S.S.TM Key",
        img: img333,  
        cash: "30 000 ₽",
    },
    cardData4: {
        title: "Мужской костюм 3мм",
        img: img444,  
        cash: "7 000 ₽",
    },

}

export default function ProductDescription(props) {
    return (
        <div className={s.productDescription}>
            <div className={s.container}>
                <div className={s.infoContent}>

                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Главная
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                            Гидроциклы
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                        Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                        </Link>
                        
        </Breadcrumbs>
                

                    <section className={s.infoProduct}>
                        <InfoProduct/>
                    </section>

                    
                    <section className={s.infoProduct}>
                        <NavAboutProduct/>
                        <SeachShop/>
                    </section>

                    <section className={s.infoTable}>                        
                        <TableBlock/>
                    </section>

                    <section className={s.infoSlider}>
                        <ProductsItemsBlock cardData={otherProductsCardData} style={{display:"none"}}/>                    
                    </section>
                </div>
            </div>    
        </div>
);
}
