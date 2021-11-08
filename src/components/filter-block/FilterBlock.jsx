import s from './FilterBlock.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PriceSelect from "./price-select/PriceSelect"

import Checkbox from '@mui/material/Checkbox';
import FilterButtons from '../filter-buttons/FilterButtons';



import CatalogPolzunok from '../catalog-polzunok/CatalogPolzunok';
import { NavLink } from 'react-router-dom';




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
    
  />
))(({ theme }) => ({

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
    
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '&.Mui-focused hover': {
    borderColor: '#007AFF'
  },
}));



const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  
  
}));

export default function FilterBlock() {
  const data1 = {
    title:"Мощность, л.с.",
    value1:90,
    value2:130,
    value3:154,
    value4:230,
    value5:300,
  }

  const data2 = {
    title:"Мощность двигателя, л.с.",
    value1:90,
    value2:130,
    value3:154,
    value4:230,
    value5:300,
  }

  const data3 = {
    title:"Макс. скорость",
    value1:110,
    value2:120,
    value3:130,
    value4:140,
    value5:150,
  }
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  

  const [value, setValue] = React.useState([20, 37]);

  const handleChangeRangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h2 className={s.filterTitle}>Наличие</h2>
        </AccordionSummary>
        <AccordionDetails>
            <div className={s.categoriesWrap}>
                    <div className={s.schoice} style={{marginRight:52}}>
                        <Checkbox className={s.catalogCheck}/>
                        <p className={s.checkText}>В наличие</p>
                    </div>
                
                    <div className={s.schoice}>
                        <Checkbox className={s.catalogCheck}/>
                        <p className={s.checkText}>Под заказ</p>
                    </div>
                </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h2 className={s.filterTitle}>Новинки</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.newsWrap}>
                <div className={s.schoice} style={{marginRight:19}}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>Все</p>
                </div>
                
                <div className={s.schoice} style={{marginRight:19}}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>Новинки</p>
                </div>

                <div className={s.schoice}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>Акции</p>
                </div>


        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h2 className={s.filterTitle}>Цена</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <CatalogPolzunok/>

          </Typography>
        </AccordionDetails>
        <div className={s.priceSelections}>
          <PriceSelect title={data1.title} value1={data1.value1} value2={data1.value2} value3={data1.value3} value4={data1.value4} value5={data1.value5}/>
          <PriceSelect title={data2.title} value1={data2.value1} value2={data2.value2} value3={data2.value3} value4={data2.value4} value5={data2.value5}/>
          <PriceSelect title={data3.title} value1={data3.value1} value2={data3.value2} value3={data3.value3} value4={data3.value4} value5={data3.value5}/>
        </div>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h2 className={s.filterTitle}>Бренд</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.brendWrap}>
              <div className={s.schoice} style={{marginRight:91}}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>BRP</p>
              </div> 
                            
              <div className={s.schoice}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>Spark 2</p>
              </div>

              <div className={s.schoice}>
                    <Checkbox className={s.catalogCheck}/>
                    <p className={s.checkText}>Spark 3</p>
              </div>                  
          </div> 
              <NavLink className={s.linkMore} to="">Показать еще</NavLink>
              
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <h2 className={s.filterTitle}>Модель</h2>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <div className={s.modelChoiseWrapper}>
            <input className={s.modelChoise}  type="text" placeholder="Введите модель" />
          </div>

          <div className={s.modelWrap}>
              <div className={s.schoice}>
                  <Checkbox className={s.catalogCheck}/>
                  <p className={s.checkText}>Sea-doo Spark 2</p>
              </div>

              <div className={s.schoice}>
                  <Checkbox className={s.catalogCheck}/>
                  <p className={s.checkText}>SeaDoo GTI 155</p>
              </div>

              <div className={s.schoice}>
                  <Checkbox className={s.catalogCheck}/>
                  <p className={s.checkText}>SeaDoo Spark 90 </p>
              </div>

              <div className={s.schoice}>
                  <Checkbox className={s.catalogCheck}/>
                  <p className={s.checkText}>SeaDoo GTR 230</p>
              </div>                   

          </div>
          <NavLink className={s.linkMore} to="">Показать еще</NavLink>

          </Typography>
      </AccordionDetails>
    </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <h2 className={s.filterTitle}>Акции</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FilterButtons/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <h2 className={s.filterTitle}>Страны</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.counterWrap}>            
            <div className={s.schoice}>
                <Checkbox className={s.catalogCheck}/>
                <p className={s.checkText}>Россия</p>
            </div>
        
            <div className={s.schoice}>
                <Checkbox className={s.catalogCheck}/>
                <p className={s.checkText}>Китай</p>
            </div>

            <div className={s.schoice}>
                <Checkbox className={s.catalogCheck}/>
                <p className={s.checkText}>Германия</p>
            </div>

            <div className={s.schoice}>
                <Checkbox className={s.catalogCheck}/>
                <p className={s.checkText}>CША</p>
            </div>

        </div>   
        <NavLink className={s.linkMore} to="">Показать еще</NavLink>      
        </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  
  );
}