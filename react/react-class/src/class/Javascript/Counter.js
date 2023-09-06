import React, { Component } from "react";

class Counter extends Component{
    state = {
        count: 0
    }

    increase = () => {
        const  { count } = this.state
        this.setState({ count: count + 1 })
        console.log(`1번 실행: ${count}`) // 0
    }
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }
    componentWillUnmount(){
        alert("해당 컴포넌트를 보이지 않게 하시겠어요?")
        clearInterval(this.timerId)
    }
    render(){
        const { count } = this.state
        console.log(`화면 렌더링: ${count}`)
        return (
            <>
                <div>
                    <h1>카운팅: {count}</h1>
                </div>
            </>
        )
    }
}

export default Counter