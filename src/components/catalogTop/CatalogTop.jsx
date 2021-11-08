import FilterTopSelect from "../filter-top-select/FilterTopSelect";
import s from "./CatalogTop.module.scss";
import icon1 from "./../../assets/images/CatalogTop/icon1.svg";
import icon2 from "./../../assets/images/CatalogTop/icon2.svg"
import MySelect from "../my-select/MySelect";
import CatalogGropBtn from "../CatalogGropBtn/CatalogGropBtn";






function CatalogTop(props) {


    const data = {
        name: "Полноприводные",
    }
    const data2 = {
        name: "от 5000",
    }
    const data3 = {
        name: "BRP",
    }
    const data4 = {
        name: "еще",
    }

    return ( 
        <div className={s.catalogTop}>
            <div className={s.container}>
                
                    
                    <h2 className={s.title}>Гидроциклы</h2>
            
                    <div className={s.wrapper}>
                        <div className={s.groupBtnLeft}>
                            <CatalogGropBtn name={data.name}/>
                            <CatalogGropBtn name={data2.name}/>
                            <CatalogGropBtn name={data3.name}/>
                            <CatalogGropBtn name={data4.name}/>
                        </div>

                    <div className={s.groupRight}>
                           
                            <FilterTopSelect/>
                          
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

 