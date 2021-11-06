import s from "./FilterTopSelect.module.scss";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@mui/material/InputLabel';

export default function SelectLabels(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const myTopSelect = makeStyles((theme) =>({
    root: {
        height:33,
        fontFamily:'SFProDisplayRegular',
        fontWeight: 400,
        fontSize: 14,
        color:'#2F3035',
        borderRadius:0,
        paddingLeft: 15,
      
       
      //   '& .MuiSelect-icon': {
          
      // },
    },
}),
);

  const classes = myTopSelect();


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 178,}}>
      {/* <InputLabel className={s.selectLabel}>По полулярности</InputLabel> */}
        <Select
          
          value={age}
          onChange={handleChange}
          displayEmpty
          autoWidth
          className={classes.root}
        >
          <MenuItem value={10}>По популярности</MenuItem>
          <MenuItem value={20}>По цене с min</MenuItem>
          <MenuItem value={30}>По цене с max</MenuItem>
          <MenuItem value={40}>По рейтингу</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}




















