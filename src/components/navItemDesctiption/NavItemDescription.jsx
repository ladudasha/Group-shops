import Item from "../common/header/Item/Item";
import s from "./NavItemDescription.module.scss";



function NavItemDescription(props) {
    
    const dataItem1={
        title: "Квадроциклы"
    }
    const dataItem2={
        title: "Катера"
    }
    const dataItem3={
        title: "Гидроциклы"
    }
    const dataItem4={
        title: "Лодки"
    }
    const dataItem5={
        title: "Вездеходы"
    }
    const dataItem6={
        title: "Снегоходы"
    }
    const dataItem7={
        title: "Двигатели"
    }
    
    return ( 
        <div className={s.navItemDescription}>            
                <Item title={dataItem1.title}/>
                <Item title={dataItem2.title}/>
                <Item title={dataItem3.title}/>
                <Item title={dataItem4.title}/>
                <Item title={dataItem5.title}/>
                <Item title={dataItem6.title}/>
                <Item title={dataItem7.title}/>
        </div>
    );
}

export default NavItemDescription;