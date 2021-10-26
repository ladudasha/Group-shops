
import FilterBlock from "../filter-block/FilterBlock";
import s from "./CatalogLeft.module.scss";


function CatalogLeft(props) {
    return ( 
        <div className={s.catalogLeft}>
            <div>   
                <button>Параметры</button>
                <button>по марке</button>
                
            </div>
           <FilterBlock/>
        </div>
    );
}

export default CatalogLeft;