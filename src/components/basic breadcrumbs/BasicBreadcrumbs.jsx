import s from './BasicBreadcrumbs.module.scss';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  export default function BasicBreadcrumbs() {
    return (
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Link
          underline="hover"
          color="text.primary"
          href="/components/breadcrumbs/"
          aria-current="page"
        >
          Гидроциклы
          </Link>
        </Breadcrumbs>
      </div>
    );
  }