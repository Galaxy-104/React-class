import React, { Component } from "react";

class Button extends Component{
    
    render(){
        return(
            <button className="sort-btns" onClick={this.props.changeToggle}>Price</button>
        )
    }
}
export default Button