import React from "react";
import './SideMenu.css'

function SideMenu({ children, handleMouseOver, id }){
    return (
        <div id={id} onMouseOver={handleMouseOver}>
            {children}
        </div>
    )
}

export default SideMenu