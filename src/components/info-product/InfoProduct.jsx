import s from './InfoProduct.module.scss';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import img from './../../assets/images/catalogImages/img32.png';

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
                    <span>SALE</span>
                    <img src={img} alt="" />
                    <span>1 200 475 ₽</span>
                    <span>1 100 475 ₽</span>
                    {/* <NavLink className={s.moreInfoText} to={props.link}>Нашли дешевле? Снизим цену!</NavLink>  */}
                </div>
                <div className={s.rightBlock}>
                    <h2>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                    <span>Код товара: 	366666-2 </span>
                    <div>
                        <div className={s.infoProductLike}>
                            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
                            <img src={Icon} alt="" />
                            <GidroRating/>
                        </div>
                        
                    </div>
                    <div>
                        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                            <Tab label="Характеристика" />
                            <Tab label="Наличие в магазине" disabled />
                        </Tabs>
                    </div>
                </div>

            </div>
            
        </div>
    
    );
}

export default InfoProduct;