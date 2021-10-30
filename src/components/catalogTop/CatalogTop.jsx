import FilterTopSelect from "../filter-top-select/FilterTopSelect";
import s from "./CatalogTop.module.scss";
import icon1 from "./../../assets/images/CatalogTop/icon1.svg";
import icon2 from "./../../assets/images/CatalogTop/icon2.svg"
// import MySelect from "../my-select/MySelect";



function CatalogTop() {

    return ( 
        <div className={s.catalogTop}>
            <div className={s.container}>
                
                    
                    <h2 className={s.title}>Гидроциклы</h2>
                    <div className={s.wrapper}>
                        <div className={s.groupLeft}>
                            <button>Полноприводные</button>
                            <button>от 5000</button>
                            <button>BRP</button>
                            <button>еще</button>
                        </div>

                        <div className={s.groupRight}>
                            
                          
                            {/* <FilterTopSelect/> */}
                            {/* <MySelect/> */}
                            <div className={s.btnBlock}>
                                <button className={s.btnRight}><img src={icon1} alt="" /></button>
                                <button className={s.btnRight}><img src={icon2} alt="" /></button>
                            </div>
                            
                        </div>

                    </div>
                   
                
                </div>
                    
            </div>
       
    );
}

export default CatalogTop;

 