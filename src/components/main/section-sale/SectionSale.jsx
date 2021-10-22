import s from "./SectionSale.module.scss";
import img1 from "./../../../assets/images/mainImages/SectionSale1.png"
import img2 from "./../../../assets/images/mainImages/SectionSale2.png"


function SectionSale(props) {
    


    return ( 
        <div className={s.container}>
        <div className={s.SectionSale}>
            <div className={s.saleImages}>
                <img src={img1} alt="SaleImg1" className={s.saleImg1} />
                <img src={img2} alt="SaleImg2" className={s.saleImg2} />
            </div>
            <p className={s.saleText}>CКИДКИ <br/> на все запчасти <br/>
            до 70%</p>
            <button className={s.saleBtn}>ПОСМОТРЕТЬ ВСЕ</button>
        </div>
        </div>
    );
}

export default SectionSale;