import s from './BannerItem.module.scss';

function BannerItem(props) {


    return ( 
        <div className={s.container}>
            <div className={s.bannerItem}>
                <img className={s.bannerItemImg} src={props.img} alt=""/>
            </div>
        </div>
    );
}

export default BannerItem;