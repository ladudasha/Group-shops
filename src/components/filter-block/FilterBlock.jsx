import s from './FilterBlock.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FilterBattons from '../filter-battons/FilterBattons';

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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  
}));

export default function FilterBlock() {
  
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
          блаблабла
          </Typography>
        </AccordionDetails>
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
                <a href="">Показать еще</a>
          </Typography>
        </AccordionDetails>
  </Accordion>

   <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
         <h2 className={s.filterTitle}>Модель</h2>
        </AccordionSummary>
        <AccordionDetails>
      <Typography>
      <div className={s.modelChois}>
                <input  type="text" placeholder="Введите модель" />
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
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <h2 className={s.filterTitle}>Акции</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FilterBattons/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <h2 className={s.filterTitle}>Страны</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.countruWrap}>
            
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
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}