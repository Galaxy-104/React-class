import React, { Component } from "react";
import Button from "./Button";

class Nav extends Component{
    
    render(){
        return (
            <div className="header">
                <Button changeToggle={this.props.changeToggle}/>
            </div>
        )
    }
}
