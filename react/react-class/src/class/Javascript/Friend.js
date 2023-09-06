import React from "react";

class Friend extends React.Component{
    
    render(){
        const { name, age, city } = this.props
        const style = {
            borderBottom: "1px dashed #000",
            width: "10rem",
            margin: "0 auto"
        }

        return (
            <>
                <div style={style}>
                    <h3>{name}</h3>
                    <h4>{age}</h4>
                    <h4>{city}</h4>
                </div>
            </>
        )
    }
}

export default Friend