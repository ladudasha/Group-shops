import s from './CardStock.module.scss';
// import StockImg from './../../../../assets/images/mainImages/mainInfo/motorStock.png';

function CardStock(props) {
    


    return ( 
        <article className={s.cardStock}>
                <div className={s.stockTop}>
                    <span className={s.stockName}>акция</span>
                    <span className={s.newPrace}>{props.newPrace}</span>
                </div>
                <div className={s.oldPrace}>{props.oldPrace}</div>
                <div className={s.stockWrapImg}>
                    <img className={s.stockImg} src={props.img} alt="" />
                </div>
                <h2 className={s.stockTitle}>{props.title}</h2>
                <div className={s.stockBottom}>
                    <p className={s.stockTextInfo}>Акция действует до</p>
                    <p className={s.stockDate}>{props.date}</p>
                </div>
            
        </article>

        
    );
}

export default CardStock;