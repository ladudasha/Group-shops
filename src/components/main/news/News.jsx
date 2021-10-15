import s from './News.module.scss';

function News(props) {
    


    return ( 
        <div className={s.container}>
            <div className={s.newsWrap}>
                <div className={s.newsSlider}>Слайдер</div>
                <div className={s.cardStock}> Карта-скидка</div>
            </div>
        </div>
        
    );
}

export default News;