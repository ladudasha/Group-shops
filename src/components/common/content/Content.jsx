import s from "./Content.module.scss";
import Main from "./../../main/Main";
import Catalog from "./../../catalog/Catalog";
// import ProductDescription from "./../../product-card/ProductDescription";



function Content(props) {
    


    return ( 
        <div>
            <Main/>
            <Catalog/>
            {/* <ProductDescription/> */}
        </div>
    );
}

export default Content;