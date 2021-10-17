import s from './MainInfo.module.scss';
import CardStock from './card-stock/CardStock';

function MainInfo(props) {
    


    return ( 
        <div className={s.container}>
            <div className={s.MainInfoWrap}>
                <div className={s.newsSlider}>Слайдер</div>
                <CardStock/>
            </div>
        </div>
        
    );
}

export default MainInfo;