import Item from "../common/header/Item/Item";
import s from "./NavAboutProduct.module.scss";



function NavAboutProduct(props) {
    
    const dataItem1={
        title: "О товаре"
    }
    const dataItem2={
        title: "Характеристики"
    }
    const dataItem3={
        title: "Отзывы"
    }
    const dataItem4={
        title: "Самовывоз"
    }
    const dataItem5={
        title: "Доставка"
    }
    const dataItem6={
        title: "Cервис"
    }
    const dataItem7={
        title: "Гарантия"
    }
    
    return ( 
        <div className={s.navAboutProduct}>            
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

export default NavAboutProduct;