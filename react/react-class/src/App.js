import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './questions/question-cos/Nav';
import ProductList from './questions/question-cos/ProductList';


class App extends Component{
  constructor(props){
    super(props)
    this.searchInput = React.createRef()
  }

  state = {
    toggle: true,
    products: [],
    keyword: '',
    searchedProducts: [],
    category: {
      types: []
    }

  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then( res => res.json() )
    .then( result => {
      const types = []
      result.forEach(product => {
        if(!types.includes(product.product_type)){
          types.push(product.product_type)
        }
      })
      this.setState({ products: result, category: { types} })
    })
  }

  changeToggle = () => {
    this.setState({ toggle: !this.state.toggle})
  }
  changeKeyword = () => {
    this.setState({ toggle: true, searchedProducts: this.state.products.filter(product => {
      return product.name.toLowerCase().includes(this.searchInput.current.value.toLowerCase()) ||
      product.product_type.toLowerCase().includes(this.searchInput.current.value.toLowerCase())
    })})
  }

  render(){
    const { toggle, products, keyword, searchedProducts, category } = this.state

    return (
      <div className='App'>
        <Nav changeToggle={this.changeToggle} searchInput={this.searchInput} changeKeyword={this.changeKeyword} category={category}/>
        {products.length === 0? console.log('로딩중') : 
        searchedProducts.length === 0? 
        toggle? <ProductList products={products}/> : <ProductList products={[...products].sort((p1, p2) => p1.price - p2.price)}/> :
        toggle? <ProductList products={searchedProducts}/> : <ProductList products={[...searchedProducts].sort((p1, p2) => p1.price - p2.price)}/>}
      </div>
    )
    
  }
}


export default App;