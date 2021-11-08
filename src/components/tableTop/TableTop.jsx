import s from "./TableTop.module.scss"
import RadioButtonMain from "../radioButtonMain/RadioButtonMain";




export default function TableTop() {
    return (
    <div className={s.tableTop}>
        <div className={s.list}></div>
        <div className={s.wrap}>
            <div className={s.leftBlock}></div>
            <div className={s.rightBlock}>
                <div>
<RadioButtonMain/>
                </div>
                <div></div>
            </div>
        </div>

    </div>
);
}
