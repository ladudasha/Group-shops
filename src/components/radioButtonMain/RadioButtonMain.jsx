import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';


// стилизация значка в ненажатом состоянии!

const BpIcon = styled('span')(({ theme }) => ({

  width: 8,
  height: 8,
  marginRight: 15, 
  outline: '2px auto #C4C4C4',
  outlineOffset: 3,
  

}));

// стилизация значка в нажатом состоянии!

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#1C62CD', 
  outline: '2px auto #1C62CD',
  
    display: 'block',
    width: 8,
    height: 8,  
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      // color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function RadioButtonMain() {
  return (
    <FormControl component="fieldset">
     
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel style={{marginRight:55}}value="female" control={<BpRadio/>} label="Забрать сегодня" />
        <FormControlLabel value="male" control={<BpRadio/>} label="Забрать в течение недели" />       
        
      </RadioGroup>
    </FormControl>
  );
}
