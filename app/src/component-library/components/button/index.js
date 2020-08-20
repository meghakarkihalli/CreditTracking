import React, { Component } from 'react';
import style from './style.scss';

function Button(props) {
    return (
        <button onClick={props.my_function} className={props.btn_class}>{props.children}</button>
    );
}
export default Button;



