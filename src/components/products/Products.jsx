import s from "./Products.module.scss";
import SectionProduct from "./../section-product/SectionProduct";



function Products(props) {
    return ( 
        <section className={s.products}>
            <div className={s.container}>
                <div className={s.productsWraper}>            
                    <SectionProduct title={props.data.title} img={props.data.img} link={props.data.link}/> 
                    <SectionProduct title={props.data2.title} img={props.data2.img} link={props.data2.link}/>
                    <SectionProduct title={props.data3.title} img={props.data3.img} link={props.data3.link}/>
                    <SectionProduct title={props.data4.title} img={props.data4.img} link={props.data4.link}/>
                    <SectionProduct title={props.data5.title} img={props.data5.img} link={props.data5.link}/> 
                    <SectionProduct title={props.data6.title} img={props.data6.img} link={props.data6.link}/>
                    </div>
                </div>
        </section>
    );
}

export default Products;