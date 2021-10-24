import s from './BannerItem.module.scss';

function BannerItem(props) {


    return ( 
    
        <img className={s.bannerItemImg} src={props.img} alt=""/>

    );
}

export default BannerItem;