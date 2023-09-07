import React from "react"
import Button from "./class/Javascript/Button"

function Word({ handleRemove, w, id}){
    const wordStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <div key={id} style={wordStyle}>
          <h2>{w.word}</h2>
          <Button size="small" type='button' handleClick={handleRemove}>DELETE</Button>
        </div>
    )
}

export default Word