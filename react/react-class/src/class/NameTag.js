import React, { Component } from "react";

class NameTag extends Component{
    state = {
        name: '초기 이름'
    }
    changeName = () => {
        this.setState({ name: '수정된 이름'})
        // this.state.name = "수정된 이름"
        // setState를 사용하지 않고 state를 직접 변경하면
        // render 함수가 호출되지 않음.
    }

    render(){
        console.log('NameTag')
        const { name } = this.state
        return (
            <>
                <h1>{name}</h1>

                <button onClick={this.changeName}>변경</button>
                {/* this.changeName()을 사용하여 함수를 호출하면
                onClick 이벤트가 발생하지 않아도 render되면 함수 호출
                함수가 호출되면 setState가 실행되고 setState가 실행되면
                render가 실행되기 때문에 무한루프에 빠지게 됨. */}
            </>
        )
    }
}

export default NameTag