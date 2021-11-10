import s from "./TableTop.module.scss"
import RadioButtonMain from "../radioButtonMain/RadioButtonMain";




export default function TableTop() {
    return (
    <div className={s.tableTop}>       
        
            <div className={s.leftBlock}>
                <p className={s.tableTopText}>Магазин</p>
                <input type="text" />
            </div>

            <div className={s.rightBlock}>                
                <RadioButtonMain/>                    
            </div>
        </div>

);
}
