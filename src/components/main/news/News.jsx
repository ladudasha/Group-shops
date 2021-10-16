import s from './News.module.scss';

function News(props) {
    


    return ( 
        <div className={s.container}>
            <div className={s.newsWrap}>
                <div className={s.newsSlider}>Слайдер</div>
                <div className={s.cardStock}> 
                    <h2>Лодочный мотор Suzuki DF9.9BRS 12345</h2>
                </div>
            </div>
        </div>
        
    );
}

export default News;