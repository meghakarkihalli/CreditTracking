import React, { Component } from 'react';
import style from './style.scss';
// import { modes } from 'react-transition-group/SwitchTransition';

const Button = (props) => {
    const {clickHandler, btn_class} = props;
    return (
        <button onClick={clickHandler}  className={btn_class}>{props.children}</button>
    );
}
export default Button;

