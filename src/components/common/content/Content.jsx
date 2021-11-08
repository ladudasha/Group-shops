import s from "./Content.module.scss";
import Main from "./../../main/Main";
import Catalog from "./../../catalog/Catalog";
import ProductDescription from "./../../productDescription/ProductDescription";



function Content(props) {
    


    return ( 
        <div className={s.contentInfo}>
            <Main/>
            <Catalog/>
            <ProductDescription/>
        </div>
    );
}

export default Content;