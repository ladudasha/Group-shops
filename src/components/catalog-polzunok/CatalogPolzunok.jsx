import s from './CatalogPolzunok.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { withStyles }  from '@material-ui/core/styles';

function valuetext(value) {
    return `${value}°C`;
  }

function CatalogPolzunok() {

    const [value, setValue] = React.useState([20, 37]);

  const handleChangeRangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const MySlider = withStyles({
    root: {
    },
    rail: {
        height: 1,
        backgroundColor:'#E0E0E0',
      },
    track: {
        height: 3,
        backgroundColor:'#1C62CD',
    },
    thumb: {
        height: 7,
        width: 7,
        backgroundColor: "#1C62CD",
    },
})(Slider);

    return ( 
   
        <div className={s.catalogPolzunok}>
            <Box sx={{ width: 280 }}>
                <MySlider
                    getAriaLabel={() => 'Money range'}
                    value={value}
                    min={100000}
                    step={50000}
                    max={500000}
                    onChange={handleChangeRangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>

            <div class={s.polzunok}>
              <p><label className={s.labelName} for="name">от</label><input type="text" class={s.polzunokInputLeft} placeholder="100 000"/></p>
              <p><label className={s.labelName} for="name">до</label> <input type="text" class={s.polzunokInputRight} placeholder="500 000"/></p> 
            </div>
        </div>
    
    );
}

export default CatalogPolzunok;