import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import './Nav.css'
import { HiSearch } from "react-icons/hi";
import { FiMenu } from "react-icons/fi"


class Nav extends Component{

    render(){
        const { changeToggle, searchInput, changeKeyword, category } = this.props

        return (
            <div className="header">
                <div className="category">
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
        )
    }
    
    
}

export default Nav