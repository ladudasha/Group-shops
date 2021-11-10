import s from './gidroRating.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const MyRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#1C62CD',
    },
    '& .MuiRating-iconEmpty': {
      color: '#C4C4C4',
    },
  });
  

function GidroRating(props) {

    return ( 
        <MyRating
            readOnly
            defaultValue={4}
            emptyIcon={<StarIcon />} />
    
    );
}

export default GidroRating;