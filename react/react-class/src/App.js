import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './questions/question4/Nav';
import ProductList from './questions/question4/ProductList';

class App extends Component{
  state = {
    toggle: true,
    products: []
  }
  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then( res => res.json() )
    .then( result => {
      this.setState({ products: result })
    })
  }
  changeToggle = () => {
    this.setState({ toggle: !this.state.toggle})
  }

  render(){
    const { toggle, products } = this.state
    console.log(toggle)

    return (
      <div className='App'>
        <Nav changeToggle={this.changeToggle}/>
        {products.length === 0? console.log('로딩중') : 
        toggle? <ProductList products={products}/> : <ProductList products={[...products].sort((p1, p2) => p1.price - p2.price)}/>}
      </div>
    )
    
  }
}


export default App;