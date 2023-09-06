import React from "react";
import './Input.css'

function Input({ type, searchInput }){
    return (
        <input type={type} ref={searchInput} ></input>
    )
}

export default Input