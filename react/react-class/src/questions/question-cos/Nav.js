import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import './Nav.css'
import { HiSearch } from "react-icons/hi";
import { FiMenu } from "react-icons/fi"
import SideMenu from "./SideMenu";
import Dropdown from "./Dropdown";


function Nav({ changeToggle, searchInput, changeKeyword, menus }){

    const [toggle, setToggle] = useState(false)
    const toggleSidemenu = () => {
        setToggle(!toggle)
    }

    const [isMouseOver, setMouseOver] = useState(false)
    const [target, setTarget] = useState('')

    const handleMouseOver = (e) => { 
        console.log(e.target.id)
        setMouseOver(true)
    }

    const handleMouseOut = () => {
        setMouseOver(false)
    }
    
    return (
        <>
            <div className="header">
                <div className="sidemenu-btn" onClick={toggleSidemenu}>
                    <FiMenu size='30'/>
                </div>
                <div className="search-container">
                    <Input type='text' searchInput={searchInput}></Input>
                    <Button className='search-btn' handleClick={changeKeyword}>
                        <HiSearch size="25"/>
                    </Button>
                </div>
                <Button className='sort-btns' handleClick={changeToggle}>Price</Button>
            </div>
            <div className={`sidemenu ${toggle? 'open' : ''}`}>
                <div className="menu-container">
                    <SideMenu id='types' handleMouseOver={handleMouseOver}>제품 유형</SideMenu>
                    <SideMenu id='price'>가격</SideMenu>
                </div>
            </div>

            <Dropdown id='types' target={target} isMouseOver={isMouseOver}>
                {menus.types.map((type, id) => {
                    return (
                        <span key={id}>{type}</span>
                    )
                })}
            </Dropdown>
            <Dropdown id='price'></Dropdown>
        </>
        
    )
}

export default Nav