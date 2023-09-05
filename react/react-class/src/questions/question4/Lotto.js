import React, { Component } from "react";

class Lotto extends Component{
    state = {
        count: 0,
        numbers: []
    }
    pickRandomNumber = (min, max) => {
        return Math.floor( Math.random() * (max-min+1) ) + min
    }
    createNumber = () => {
        const numbers = []
        for(let i = numbers.length; numbers.length <= 6; i++){
            let pickNumber = this.pickRandomNumber(1, 45)
            if(!numbers.includes(pickNumber)){
                numbers.push(pickNumber)
            }
        }
        this.setState({numbers})
        console.log(numbers)
    }
    componentDidMount(){
        this.timerID = setInterval(this.createNumber, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        const { count, numbers } = this.state
        return (
            <>
                <h1>로또 번호 자동 생성기</h1>
                <div className="numbers">
                    {numbers.map((number) => {
                        return (
                            <div key={number}>{number}</div>
                        )
                    })}
                </div>
            </>
            
        )
    }
}

export default Lotto