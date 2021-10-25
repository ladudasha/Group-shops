import s from "./Catalog.module.scss";



function Catalog(props) {
    return ( 
        <div className={s.catalog}>
            <div className={s.container}>
                <div className={s.catalogContent}>
                    <div className={s.catalogTitleBlock}>catalogTitle+button</div>
                    <sidebar className={s.filterProductsBlock}>filterBlock</sidebar>
                    <div className={s.catalogCards}>Catalog: ProductsCard*12</div>
                    <div className={s.paginationPages}>pagination pages</div>
                </div>
                
            </div>
        </div>
    );
}

export default Catalog;