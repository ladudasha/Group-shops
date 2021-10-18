import s from './CardStock.module.scss';
import StockImg from './../../../../assets/images/mainImages/motorStock.png';

function CardStock(props) {
    


    return ( 
        <section className={s.cardStock}>
                <div className={s.stockTop}>
                    <span className={s.stockName}>акция</span>
                    <span className={s.newPrace}>190 000</span>
                </div>
                <div className={s.oldPrace}>225 000</div>
                <div className={s.stockWrapImg}>
                    <img src={StockImg} alt="" />
                </div>
                <h2 className={s.stockTitle}>Лодочный мотор Suzuki DF9.9BRS</h2>
                <div className={s.stockBottom}>
                    <p className={s.stockTextInfo}>Акция действует до</p>
                    <p className={s.stockDate}>31.08.2020</p>
                </div>
            
        </section>

        
    );
}

export default CardStock;