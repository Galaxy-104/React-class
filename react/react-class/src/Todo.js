import React from "react"; // jsx 문법 사용

function Todo({ user, name, done, description }){
    return (
        <>
            <h2>사용자: {user}</h2>
            <h3>할일 제목: {name}</h3>
            <h3>할일 종료 여부: {done? "종료" : "진행중"}</h3>
            <p>할일 설명: {description}</p>
        </>
    )
}

export default Todo