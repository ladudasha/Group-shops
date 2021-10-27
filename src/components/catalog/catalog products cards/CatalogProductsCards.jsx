import s from './CatalogProductsCards.module.scss';
import ProductCard from '../../product-card/ProductCard';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function CatalogProductsCards(props) {
    


  return ( 
      <div className={s.catalogProductsCards}>
        <div className={s.catalogWrapper}>
          <ProductCard title={props.data1.title} img={props.data1.img} cash={props.data1.cash}/>
          <ProductCard title={props.data2.title} img={props.data2.img} cash={props.data2.cash}/>
             <ProductCard title={props.data3.title} img={props.data3.img} cash={props.data3.cash}/>
             <ProductCard title={props.data4.title} img={props.data4.img} cash={props.data4.cash}/>
             <ProductCard title={props.data5.title} img={props.data5.img} cash={props.data5.cash}/>
             <ProductCard title={props.data6.title} img={props.data6.img} cash={props.data6.cash}/>
             <ProductCard title={props.data7.title} img={props.data7.img} cash={props.data7.cash}/>
             <ProductCard title={props.data8.title} img={props.data8.img} cash={props.data8.cash}/>
             <ProductCard title={props.data9.title} img={props.data9.img} cash={props.data9.cash}/>
             <ProductCard title={props.data10.title} img={props.data10.img} cash={props.data10.cash}/>
             <ProductCard title={props.data11.title} img={props.data11.img} cash={props.data11.cash}/>
             <ProductCard title={props.data12.title} img={props.data12.img} cash={props.data12.cash}/> 
             
        </div>
      </div>
  );
}

export default CatalogProductsCards;


{/*  */}