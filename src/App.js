import './App.css';
import SectionProduct from './components/section-product/SectionProduct';
import img1 from "./../src/assets/images/products/img1.png";
import img2 from "./../src/assets/images/products/img2.png";
import img3 from "./../src/assets/images/products/img3.png";
import img4 from "./../src/assets/images/products/img4.png";
import img5 from "./../src/assets/images/products/img5.png";
import img6 from "./../src/assets/images/products/img6.png";
import { BrowserRouter } from 'react-router-dom';




function App() {

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
        link: "006",
    }

    return (
        <BrowserRouter>
            <div className="products">
        
                <SectionProduct title={data.title} img={data.img} link={data.link}/>
                <SectionProduct title={data2.title} img={data2.img} link={data2.link}/>
                <SectionProduct title={data3.title} img={data3.img} link={data3.link}/>
                <SectionProduct title={data4.title} img={data4.img} link={data4.link}/>
                <SectionProduct title={data5.title} img={data5.img} link={data5.link}/>
                <SectionProduct title={data6.title} img={data6.img} link={data6.link}/>


            </div>
        </BrowserRouter>
    );
}

export default App;
