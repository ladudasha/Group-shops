import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';

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
      //   '& .MuiSelect-icon': {
          
      // },
    },
}),
);

  const classes = myTopSelect();


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 178 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
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






// 
{/* 
          import * as React from 'react'; */}
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';



// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
      
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function FilterTopSelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a the stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 178, hight: 33,}}>
//         <InputLabel id="demo-multiple-name-label">По полулярности</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import NativeSelect from '@mui/material/NativeSelect';
// import InputBase from '@mui/material/InputBase';

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }));

// export default function FilterTopSelect() {
//   const [age, setAge] = React.useState('');
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   return (
//     <div>
//       <FormControl sx={{ m: 1 }} variant="standard">
//         <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
//         <BootstrapInput id="demo-customized-textbox" />
//       </FormControl>
//       <FormControl sx={{ m: 1 }} variant="standard">
//         <InputLabel id="demo-customized-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={age}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl sx={{ m: 1 }} variant="standard">
//         <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
//         <NativeSelect
//           id="demo-customized-select-native"
//           value={age}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//           <option aria-label="None" value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//       </FormControl>
//     </div>
//   );
// }
















