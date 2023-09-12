import logo from './logo.svg';
import './questions/question-cos/Cos.css';
import React, { Component } from 'react';
import Nav from './questions/question-cos/Nav'
import ProductList from './questions/question-cos/ProductList';


class Cos extends Component{
  constructor(props){
    super(props)
    this.searchInput = React.createRef()
  }

  state = {
    toggle: true,
    products: [],
    keyword: '',
    searchedProducts: [],
    menus: {
      types: [],
      price: ['0 - $10', 'over $10']
    }
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then( res => res.json() )
    .then( result => {
			const types = []
			for(let product of result){
				if(!types.includes(product.product_type)){
					types.push(product.product_type)
				}
			}
      this.setState({ 
				...this.state, 
				products: result,
			menus: {
				price: this.state.menus.price,
				types
			} })
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
    this.setState({ toggle: true })
  }

  render(){
    const { toggle, products, keyword, searchedProducts, menus } = this.state

    return (
      <div className='App'>
        <Nav 
					changeToggle={this.changeToggle} 
					searchInput={this.searchInput} 
					changeKeyword={this.changeKeyword}
					menus={menus}
				/>
        {products.length === 0? console.log('로딩중') : 
        searchedProducts.length === 0? 
        toggle? <ProductList products={products}/> : <ProductList products={[...products].sort((p1, p2) => p1.price - p2.price)}/> :
        toggle? <ProductList products={searchedProducts}/> : <ProductList products={[...searchedProducts].sort((p1, p2) => p1.price - p2.price)}/>}
      </div>
    )
    
  }
}


export default Cos;