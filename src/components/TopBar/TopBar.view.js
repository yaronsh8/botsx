import React from 'react';
import css from './TopBar.css';

export default ({children})=> {
    return(
        <div className="top-bar">
            <h1>{children}</h1>
            {/* <img className="css.logo" src="static/icons/logo.svg" alt="logo"/> */}
        </div>
    )   
}