import s from "./Content.module.scss";


import Main from "./../../main/Main";
import Catalog from "./../../catalog/Catalog";
import ProductCard from "./../../product-card/ProductCard";



function Content(props) {
    


    return ( 
        <div>
            <Main/>
            <Catalog/>
            <ProductCard/>
        </div>
    );
}

export default Content;