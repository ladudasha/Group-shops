import s from "./FilterButtons.module.scss";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BlackButton = styled(Button)({
    backgroundColor: "black",
    borderRadius: "0",
});

const MyButton = styled(Button)({
  borderRadius: "0",  
});
export default function FilterButtons() {

  return (
    
    <Stack spacing={1} direction="row">     
      <MyButton className={s.buttonStyle} size="small" variant="contained">SALE</MyButton>     
      <MyButton className={s.buttonStyle} size="small" variant="contained" disabled>
      NEW
      </MyButton>
      <MyButton  className={s.buttonStyle} size="small" variant="contained" disabled>
      HIT
      </MyButton>
      <BlackButton  className={s.buttonBlack} size="small" variant="contained" >ДИЛЛЕР
      </BlackButton>
    </Stack>
  );
}
