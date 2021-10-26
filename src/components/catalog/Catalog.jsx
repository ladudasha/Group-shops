import s from "./Catalog.module.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function Catalog(props) {
    return ( 
        <div className={s.catalog}>
            <div className={s.container}>
                <div className={s.catalogContent}>
                    <Breadcrumbs  />
                    <div className={s.catalogTitleBlock}> <Breadcrumbs/> catalogTitle+button</div>
                    <sidebar className={s.filterProductsBlock}>filterBlock</sidebar>
                    <div className={s.catalogCards}>Catalog: ProductsCard*12</div>
                    <div className={s.paginationPages}>pagination pages</div>
                </div>
                
            </div>
        </div>
    );
}

export default Catalog;