import React, { useState, useReducer } from "react";

// reducer: 사용자 액션(인터렉션)의 종류에 따라서
// 현재 state 값을 변경하는 함수
// state : 현재 상태, action : 사용자 액션의 종류(객체 형태)
function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer, 0)
    // dispatch : reducer를 호출해주는 함수

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT'})
    }
    const onDecrease = () => {
        dispatch({ type: 'DECREMENT'})
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter