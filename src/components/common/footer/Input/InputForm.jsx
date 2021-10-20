import s from "./InputForm.module.scss";



function InputForm(props) {
    return ( 
        <div className={s.Input}>
        <input placeholder={props.placeholder} className={s.input}/>
        <button className={s.button}>ОТПРАВИТЬ</button>
        </div>
    );
}

export default InputForm;