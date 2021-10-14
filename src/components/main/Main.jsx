import s from "./Main.module.scss";
import img1 from "./../../assets/images/products/img1.png";
import img2 from "./../../assets/images/products/img2.png";
import img3 from "./../../assets/images/products/img3.png";
import img4 from "./../../assets/images/products/img4.png";
import img5 from "./../../assets/images/products/img5.png";
import img6 from "./../../assets/images/products/img6.png";
import Products from "./../products/Products";



function Main(props) {
    const data = {
        title: "Квадроциклы",
        img: img1,
        link: "001",
    }

    const data2 = {
        title: "Гидроциклы",
        img: img2,
        link: "002",
    }

    const data3 = {
        title: "Катера",
        img: img3,
        link: "003",
    }

    const data4 = {
        title: "Снегоходы",
        img: img4,
        link: "004",
    }

    const data5 = {
        title: "Вездеходы",
        img: img5,
        link: "005"
    }

    const data6 = {
        title: "Двигатели",
        img: img6,
        link: "006"
    }
    return ( 
        <div className={s.main}>

        {/* <News/>  Baner+CardStock
        <search/> Buttons+input/button  */}
        
        <Products data={data} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>

        {/* <ProductsItemBlock/> SectionTitle+Navigation+SliderProducts(ItemProduct) */}
        {/* <SectionSale/> */}

        </div>
    );
}

export default Main;