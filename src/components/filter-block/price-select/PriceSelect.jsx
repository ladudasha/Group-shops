import s from "./PriceSelect.module.scss";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


    

    function PriceSelect(props) {
        const [speed, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
        return (
            <div className={s.container}>
            <div className={s.priceSelect}>
                <span className={s.filterTitle}>Мощность, л.с.</span>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 68, minHeight:20, margin:0, padding:0,}}>
                    <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                    <Select
                        // labelId="demo-simple-select-standard-label"
                        // id="demo-simple-select-standard"
                        value={speed}
                        // onChange={handleChange}
                        // class="glyphicon glyphicon-menu-down blue"

                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        <MenuItem value={90}>90</MenuItem>
                        <MenuItem value={130}>130</MenuItem>
                        <MenuItem value={154}>154</MenuItem>
                        <MenuItem value={230}>230</MenuItem>
                        <MenuItem value={300}>300</MenuItem>
                    </Select>
                </FormControl>
            </div>
            </div>
        );
    }

export default PriceSelect;