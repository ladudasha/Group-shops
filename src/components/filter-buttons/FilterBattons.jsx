import s from "./FilterBattons.module.scss";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BlackButton = styled(Button)({
    backgroundColor: "black",
    borderRadius: "0",
});
export default function FilterBattons() {

  return (
    
    <Stack spacing={1} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button className={s.buttonStyle} size="small" variant="contained">SALE</Button>
     
      <Button className={s.buttonStyle} size="small" variant="contained" disabled>
       NEW
      </Button>
      <Button  className={s.buttonStyle} size="small" variant="contained" disabled>
       HIT
      </Button>
      <BlackButton  className={s.buttonBlack} size="small" variant="contained" >SALE
      </BlackButton>
      {/* <Button size="small" variant="contained" color="success">
       ДИЛЛЕР
      </Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}
