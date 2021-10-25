import s from "./SearchBlock.module.scss";


function SearchBlock(props) {
    
    return ( 
        <div className={s.container}>
            <section className={s.searchBlock}>
                <div className={s.selectButtons}>
                    <button className={s.btnSelect}>{props.label1}</button>
                    <button className={s.btnSelect}>{props.label2}</button>
                    <button className={s.btnSelect}>{props.label3}</button>
                </div>
                <div className={s.inputBlock}>
                    <form action="#" method="get">
                        <input className={s.interSerch} type="search" name="s" placeholder="Введите марку"/> 
                        <button  className={s.btnSearch} type="submit">искать</button>
                    </form>
                </div>
            </section>
        </div>

    );
}

export default SearchBlock;


// {data1.label}
// {data2.label}
// {data3.label}
// Поиск по  номеру
// Поиск по марке
// Поиск по названию товара