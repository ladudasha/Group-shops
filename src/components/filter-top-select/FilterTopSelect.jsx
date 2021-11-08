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
          height:28,
          fontFamily:'SFProDisplayRegular',
          fontWeight: 400,
          fontSize: 14,
          color:'#2F3035',
          borderRadius:0,
          paddingLeft: 15,
          border: '1px solid #D7D9DF',
          '& .MuiSelect-icon': {
            right: 15,
            top: 11,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #D7D9DF',
          },
    }
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
          // inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={props => (<svg {...props} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#D7D9DF"/>
</svg>)}
        >
          <MenuItem value="">
            По популярности
          </MenuItem>
          {/* <MenuItem value={10}>По популярности</MenuItem> */}
          <MenuItem value={20}>По цене с min</MenuItem>
          <MenuItem value={30}>По цене с max</MenuItem>
          <MenuItem value={40}>По рейтингу</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}




















