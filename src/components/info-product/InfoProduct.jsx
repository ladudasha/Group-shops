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
import { makeStyles } from '@material-ui/core/styles';


function InfoProduct(props) {

    const [value, setValue] = React.useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }




    const myTabs = makeStyles((theme) =>({
        root: {
            '& .MuiTab-root':{
                
                fontFamily:'SFProDisplayRegular',
                fontSize: 20,
                fontWeight:400,
                textTransform:'capitalize',
                paddingLeft:'none',
                opacity: 0.6,
            },
            '& .Mui-selected': {
                fontFamily:'SFProDisplayBold',
                fontWeight:600,
                fontSize: 20,
                textTransform:'capitalize',
                color:'#2F3035',
                paddingLeft:'none',
                opacity: 1,
            }
        },
    }),
    );
      const classes = myTabs();




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
                    <a className={s.infoProductLeftLink}>?????????? ??????????????? ???????????? ????????!</a>
                </div>

                <div className={s.rightBlock}>
                    <h2 className={s.title}>{props.title}</h2>
                    
                    <div>    
                        <span className={s.product??ode}>?????? ????????????:</span>
                        <span className={s.product??ode}>{props.code}</span>  
                    </div>
                    <div className={s.infoProductLike}>
                            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
                            <img className={s.compareProduct} src={Icon} alt="" />
                            <GidroRating/>
                    </div>

                    <div>
                        <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        className={classes.root}>
                            <Tab label="????????????????????????????" />
                            <Tab label="?????????????? ?? ????????????????" />
                        </Tabs>
                    </div>
                    <div className={s.specifications}>
                        <div className={s.specificationRow}>
                            <span className={s.specificationName}>??????????????????????????</span>
                        </div>
                        <div className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.manufacturerCountry}</span>
                        </div>
                        
                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>???????????????????? ????????, ????: </span>
                        </div>
                        <div  className={s.specificationRow}>
                        <span className={s.specificationValue}>{props.numberOfSeats}</span>
                        </div>

                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>????????????????, ??.??.</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.power}</span>
                        </div>

                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>?????? ??????????????????</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.engineType}</span>
                        </div>
                        
                        <div  className={s.specificationRow}>
                            <span className={s.specificationName}>?????? ??????????????</span>
                        </div>
                        <div  className={s.specificationRow}>
                            <span className={s.specificationValue}>{props.yearOfIssue}</span>
                        </div>
                        

                    </div>
                    <a className={s.infoProductMoreLink}>???????????????? ??????</a>
                    <button className={s.infoProductBtn}>????????????</button>
                    
                </div>

            </div> 
        </div>
    );
}

export default InfoProduct;