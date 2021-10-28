import FilterTopSelect from "../filter-top-select/FilterTopSelect";
import s from "./CatalogTop.module.scss";
import icon1 from "./../../assets/images/CatalogTop/icon1.svg";
import icon2 from "./../../assets/images/CatalogTop/icon2.svg"


function CatalogTop() {

    return ( 
        <div className={s.catalogTop}>
            <div className={s.container}>
                
                    
                    <h1>Гидроциклы</h1>
                    <div className={s.wrapper}>
                        <div className={s.groupLeft}>
                            <button>Полноприводные</button>
                            <button>от 5000</button>
                            <button>BRP</button>
                            <button>еще</button>
                        </div>

                        <div className={s.groupRight}>
                            <FilterTopSelect/>
                            <button><img src={icon1} alt="" /></button>
                            <button><img src={icon2} alt="" /></button>
                        </div>

                    </div>
                   
                
                </div>
                    
            </div>
       
    );
}

export default CatalogTop;

 