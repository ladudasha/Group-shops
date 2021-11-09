import s from './InfoProduct.module.scss';

import img from './../../assets/images/catalogImages/img32.png';


function InfoProduct() {

    return ( 
        <div className={s.infoProduct}>
            <div className={s.infoProductBlock}>
                <div>
                    <span></span>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                    <span>Код товара: 	366666-2 </span>
                    <div>
                        like
                        <img src="" alt="" />
                        raiting
                    </div>
                    <div>
                        Вкладка Характеристика
                        Вкладка Наличие в магазине
                    </div>
                </div>

            </div>
            
        </div>
    
    );
}

export default InfoProduct;