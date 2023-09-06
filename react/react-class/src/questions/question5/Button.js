import React from "react";
import './Button.css'

function Button({ children, className, handleClick }){

    return (
        <button type="button" className={className} onClick={handleClick}>{children}</button>
    )
}

export default Button