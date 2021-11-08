

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
    //   color: theme.palette.primary.main,
     
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function RadioButtonMain() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
        <div className="wrap">
            <MyFormControlLabel value="first" label="Забрать сегодня" control={<Radio />} />
            <MyFormControlLabel value="second" label="Забрать в течение недели" control={<Radio />} />
        </div>
    </RadioGroup>
  );
}