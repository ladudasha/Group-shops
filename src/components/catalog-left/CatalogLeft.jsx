
import FilterBlock from "../filter-block/FilterBlock";
import FilterTabs from "../filter-tabs/FilterTabs";
import s from "./CatalogLeft.module.scss";


function CatalogLeft(props) {
    return ( 
        <div className={s.catalogLeft}>
             
           <FilterTabs/>
                {/* <button>Параметры</button>
                <button>по марке</button> */}
                
           
           <FilterBlock/>
        </div>
    );
}

export default CatalogLeft;