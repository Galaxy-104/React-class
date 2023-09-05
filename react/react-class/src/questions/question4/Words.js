import React, { Component } from "react";

const dummyData = [
    {
        word: 'apple',
        meaning: '사과'
    },
    {
        word: 'before',
        meaning: '이전의'
    },
    {
        word: 'clean',
        meaning: '깨끗한'
    },
    {
        word: 'dummy',
        meaning: '가짜의'
    },
    {
        word: 'emergent',
        meaning: '긴급한'
    },
    {
        word: 'famouse',
        meaning: '유명한'
    },
    {
        word: 'give',
        meaning: '(~을) 주다'
    },
    {
        word: 'humble',
        meaning: '검소한'
    },
    {
        word: 'ingrave',
        meaning: '조각하다'
    },
    {
        word: 'jungle',
        meaning: '밀림숲'
    },
    {
        word: 'korea',
        meaning: '대한민국'
    },
  
]

const cardStyle = {
    width: '200px',
    height: '200px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: '100px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}


class Words extends Component{

    state = {
        index: 0
    }

    pickRandomNumber = () => {
        this.setState({ index: Math.floor( Math.random() * (dummyData.length) )})
    }
    componentDidMount(){
        this.timerID = setInterval(this.pickRandomNumber, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        const { index } = this.state
        return (
            <div className="card" style={cardStyle}>
                <p>{dummyData[index].word}</p>
                <p>{dummyData[index].meaning}</p>
            </div>
        )
    }
}

export default Words