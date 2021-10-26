
import BasicBreadcrumbs from "../basic breadcrumbs/BasicBreadcrumbs";
import BreadcrumbsDasha from "../BreadcrumbsDasha/BreadcrumbsDasha";
import CatalogLeft from "../catalog-left/CatalogLeft";
import s from "./Catalog.module.scss";


function Catalog(props) {
    return ( 
        <div className={s.catalog}>
            <div className={s.container}>
                <div className={s.catalogContent}>
                    <div className={s.catalogTop}>
                        <BasicBreadcrumbs/>
                        catalogTitle+button
                        <h1 id="jetSkis">Гидроциклы</h1>
                    </div>
                        
                    
                    <sidebar className={s.filterProductsBlock}>
                      <CatalogLeft/>
                    </sidebar>
                    <div className={s.catalogCards}>Catalog: ProductsCard*12</div>
                    <div className={s.paginationPages}>pagination pages???</div>
                </div>
                <BreadcrumbsDasha/>
            </div>
        </div>
    );
}

export default Catalog;