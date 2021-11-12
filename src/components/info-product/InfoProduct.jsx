import s from './InfoProduct.module.scss';
import * as React from 'react';
import { NavLink } from "react-router-dom";
// import img from './../../assets/images/catalogImages/img32bigger.png';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import Icon from './../../assets/images/infoProduct/icon.svg';
import GidroRating from '../gidroRating/gidroRating';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function InfoProduct(props) {

    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return ( 
        <div className={s.infoProduct}>
            <div className={s.infoProductBlock}>

                <div className={s.leftBlock}> 
                    <span className={s.saleLabel}>SALE</span>
                    <div className={s.wrapImage}>
                        <img className={s.infoProductImg} src={props.img} alt="" />
                    </div>
                    <span className={s.oldPrace} >{props.oldPrace}</span>
                    <span className={s.newPrace}>{props.newPrace}</span>
                    <a className={s.infoProductLeftLink}>Нашли дешевле? Снизим цену!</a>
                </div>

                <div className={s.rightBlock}>
                    <h2 className={s.title}>{props.title}</h2>
                    
                    <div>    
                        <span className={s.productСode}>Код товара:</span>
                        <span className={s.productСode}>{props.code}</span>  
                    </div>
                    <div className={s.infoProductLike}>
                            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
                            <img src={Icon} alt="" />
                            <GidroRating/>
                    </div>

                    <div>
                        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                            <Tab label="Характеристика" />
                            <Tab label="Наличие в магазине" disabled />
                        </Tabs>
                    </div>
                    <div className={s.specifications}>
                        <div className={s.specificationRow}>
                            <span className={s.specificationName}>Производитель</span>
                        </div>
                        <div className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.manufacturerCountry}</span>
                        </div>
                        
                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>Количество мест, шт: </span>
                        </div>
                        <div  className={s.specificationRow}>
                        <span className={s.specificationValue}>{props.numberOfSeats}</span>
                        </div>

                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>Мощность, л.с.</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.power}</span>
                        </div>

                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>Тип двигателя</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.engineType}</span>
                        </div>
                        
                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>Год выпуска</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.yearOfIssue}</span>
                        </div>
                        

                    </div>
                    <a className={s.infoProductMoreLink}>Показать еще</a>
                    <button className={s.infoProductBtn}>купить</button>
                    
                </div>

            </div> 
        </div>
    );
}

export default InfoProduct;