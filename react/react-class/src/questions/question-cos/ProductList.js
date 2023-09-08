import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component{

    render(){
        const { products } = this.props
        return (
            <div className="root">
                <Product products={products}/>
            </div>
        )
    }
}

export default ProductList