import React from "react";
import './Dropdown.css'

function Dropdown({ children, id, target, isMouseOver }){
    return (
        <div id={id} className={`dropdown ${isMouseOver && target === id ? "open" : ""}`}>
            {children}
        </div>
    )
}

export default Dropdown