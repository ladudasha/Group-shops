import s from "./SeachShop.module.scss"
import RadioButtonMain from "../radioButtonMain/RadioButtonMain";




export default function SeachShop() {
    return (
    <div className={s.seachShop}>       
        
            <div className={s.leftBlock}>
                <p className={s.tableTopText}>Магазин</p>
                <input className={s.seach} type="text" />
            </div>

            <div className={s.rightBlock}>                
                <RadioButtonMain/>                    
            </div>
        </div>

);
}
