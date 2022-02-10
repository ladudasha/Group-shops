import React from 'react';
import s from "./Content.module.scss";
import Routers from "../../Routers";



function Content(props) {
    
    return ( 
        <div className={s.contentInfo}>
            <Routers/>
        </div>
    );
}

export default Content;