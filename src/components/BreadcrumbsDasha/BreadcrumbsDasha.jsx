
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
        Главная
      </Link>,
     
      <Typography key="2" color="text.primary">
       Гидроциклы
      </Typography>,
      
    ];
  
    return (
      <Stack spacing={2}>
       
       
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }