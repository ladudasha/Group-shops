import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FilterBattons() {
  return (
    <Stack spacing={1} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button size="small" variant="contained">SALE</Button>
     
      <Button size="small" variant="contained" disabled>
       NEW
      </Button>
      <Button size="small" variant="contained" disabled>
       HIT
      </Button>
      <Button size="small" variant="contained" color="success">
       ДИЛЛЕР
      </Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}