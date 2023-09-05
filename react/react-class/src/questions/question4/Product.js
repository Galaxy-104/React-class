import React, { Component } from "react";

class Product extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { products } = this.props

        return (    
            products.map(product => {  
                return(
                    <div className="product" key={product.id}>
                        <div className="product-img">
                            <img src={product.image_link} alt={product.name}></img>
                        </div>
                        <div className="product-name">{product.name} ({product.price})
                        </div>
                        <div className="product-description">{product.description}</div>
                        <div className="product-type">{product.product_type}</div>
                    </div>
                ) 
            })
        ) 
    }
}
export default Product