import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import './Nav.css'
import { HiSearch } from "react-icons/hi";

class Nav extends Component{

    render(){
        const { changeToggle, searchInput, changeKeyword } = this.props

        return (
            <div className="header">
                <div className="search-container">
                    <Input type='text' searchInput={searchInput}></Input>
                    <Button className='search-btn' handleClick={changeKeyword}>
                        <HiSearch size="25"/>
                    </Button>
                </div>
                <Button className='sort-btns' handleClick={changeToggle}>Price</Button>
            </div>
        )
    }
    
    
}

export default Nav