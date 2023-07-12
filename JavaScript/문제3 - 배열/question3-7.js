const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)
    function foundCos(product, index){
        let type = product.product_type
        let rating = product.rating
        if(type === 'lipstick' && Number(rating) < 5 && Number(rating) > 4) return true
        else return false
    }
    const cos = products.filter(foundCos)
    console.log(cos)
})