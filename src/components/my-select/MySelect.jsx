
import s from './MySelect.module.scss';
import img1 from "./../../assets/images/CatalogTop/row.svg"


function MySelect() {

    return ( 
            <select name="" id="" className={s.select}>
                <div className={s.selectHeader}>
                    <option disabled>Выберите героя</option>
                    <div className={s.selectIcon}><img src={img1} alt="" /></div>
                </div>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
    );
}

export default MySelect;



// function MySelect(props) {
// return ( 
//     <form action="select1.php" method="post">
//     <p><select size="5" multiple name="hero[]">
//      <option disabled>Выберите героя</option>
//      <option value="Чебурашка">Чебурашка</option>
//      <option selected value="Крокодил Гена">Крокодил Гена</option>
//      <option value="Шапокляк">Шапокляк</option>
//      <option value="Крыса Лариса">Крыса Лариса</option>
//     </select></p>
    
//    </form>
 
//   




//         <select className={s.select}>
            
//         <div className={s.selectHeader}>
//             <span className={s.selectCurrent}>Value1</span>
//             <div className={s.selectIcon}><img src={img1} alt="" /></div>
//         </div>

//         <div className={s.selectBody}>
//             <option className={s.selectItem}>Value1</option>
//             <option className={s.selectItem}>Value2</option>
//             <option className={s.selectItem}>Value3</option>
//             <option className={s.selectItem}>Value4</option>
//             <option className={s.selectItem}>Value5</option>
//         </div>
//         </select>
//     // </form>       
//     );
// }

// export default MySelect;
