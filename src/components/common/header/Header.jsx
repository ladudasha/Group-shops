import s from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import Item from "./Item/Item";



function Header(props) {
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
    const dataItem8={
        title: "Запчасти"
    }
    return ( 
        <div className={s.container}>
        <div className={s.header}>
            <HeaderTop/>
            <div className={s.ListItem}>
                <Item title={dataItem1.title}/>
                <Item title={dataItem2.title}/>
                <Item title={dataItem3.title}/>
                <Item title={dataItem4.title}/>
                <Item title={dataItem5.title}/>
                <Item title={dataItem6.title}/>
                <Item title={dataItem7.title}/>
                <Item title={dataItem8.title}/>
            </div>
        </div>
        </div>
    );
}

export default Header;