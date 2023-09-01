import React, { Component } from "react";

class Counter extends Component{
    state = {
        count: 0
    }

    increase1 = () => {
        const  { count } = this.state
        this.setState({ count: count + 1 })
        console.log(`1번 실행: ${count}`) // 0
    }
    increase2 = () => {
        const  { count } = this.state
        this.setState({ count: count + 5 })
        console.log(`2번 실행: ${count}`) // 0
    }
    increase3 = () => {
        const  { count } = this.state
        this.setState({ count: count + 7 })
        console.log(`3번 실행: ${count}`) // 0
    }

    increaserMultiple = () => {
        // 서로 다른 함수를 호출해도 하나의 함수만 실행됨.
        // 실행되는 함수는 가장 마지막에 동작하는 increase3 함수.
        this.increase1()
        this.increase2()
        this.increase3()
        console.log( `모든 이벤트 호출 후: ${this.state.count}`)
    }

    render(){
        const { count } = this.state
        console.log(`화면 렌더링: ${count}`)
        return (
            <>
                <h1>{count}</h1>
                <button onClick={this.increaserMultiple}>카운팅 버튼</button>
            </>
        )
    }
}

export default Counter