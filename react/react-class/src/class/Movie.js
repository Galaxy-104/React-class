import React, { children } from "react";

function Movie({ title, genres, cover, summary }){
    const style = {
        // 카드 컴포넌트 스타일
        width: '230px',
        heigth: '500px',
        background: 'white',
        margin: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

    }
    return (
        <div style={style}>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            {/* <p>{summary}</p> */}
        </div>
    )
}

export default Movie