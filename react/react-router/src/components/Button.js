import React from "react";
import '../styles/Button.css'

function Button({ children, size, color, width, handleClick, disabled, name }){

    return <button name={name} className={`Button ${size} ${color} ${width} ${disabled? 'blocked': ''}`} onClick={handleClick} disabled={disabled}>{children}</button>
}

export default Button

Button.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false
}