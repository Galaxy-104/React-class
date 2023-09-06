import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './questions/question5/Nav';
import ProductList from './questions/question5/ProductList';


class App extends Component{
  constructor(props){
    super(props)
    this.searchInput = React.createRef()
  }

  state = {
    toggle: true,
    products: [],
    keyword: '',
    searchedProducts: []
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
  changeKeyword = () => {
    this.setState({ searchedProducts: this.state.products.filter(product => {
      return product.name.toLowerCase().includes(this.searchInput.current.value.toLowerCase()) ||
      product.product_type.toLowerCase().includes(this.searchInput.current.value.toLowerCase())
    })})
  }

  render(){
    const { toggle, products, keyword, searchedProducts } = this.state
    console.log(toggle, keyword)
    console.log(searchedProducts)
    return (
      <div className='App'>
        <Nav changeToggle={this.changeToggle} searchInput={this.searchInput} changeKeyword={this.changeKeyword}/>
        {products.length === 0? console.log('로딩중') : 
        searchedProducts.length === 0? 
        toggle? <ProductList products={products}/> : <ProductList products={[...products].sort((p1, p2) => p1.price - p2.price)}/> :
        toggle? <ProductList products={searchedProducts}/> : <ProductList products={[...searchedProducts].sort((p1, p2) => p1.price - p2.price)}/>}
      </div>
    )
    
  }
}


export default App;