import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const { cart } = this.state
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.setState((prevState) => {
            // console.log(prevState.cart)
            return { cart: [...prevState.cart, product]}
        })
    }

    // 구현하기
    render(){
        const { cart } = this.state
        console.log(cart)
        return (
            <>
                <button type='button' 
                    onClick={this.addProduct}
                >
                    상품 추가하기
                </button>
                <h1>상품 목록</h1>
                <h3>-------------------</h3>
                {cart.map(p => {
                    return (
                        <h4>{p}</h4>
                    )
                })}
            </>
        )
    }
}
export default Cart