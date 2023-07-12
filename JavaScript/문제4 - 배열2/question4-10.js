const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const root = document.getElementById('root')
const priceBtn = document.getElementById('price-btn')
const header = document.getElementById('header')
const search = document.getElementById('search-input')


// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    return {image_link: product.image_link, name: product.name, 
        price: product.price, description: product.description, product_type: product.product_type}
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
    const divProduct = document.createElement('div')
    divProduct.className = 'product'

    root.appendChild(divProduct)

    divProduct.innerHTML = `
        <div class="product-img"> <img src="${product.image_link}"> </div>
        <div class="product-name"> ${product.name} ($${product.price}) </div>
        <div class="product-description"> ${product.description} </div>
        <div class="product-type"> ${product.product_type} </div>
    `
   // 구현하기
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    
    
    function searchItems(e){
        console.log(e.target.value)
        const items = root.querySelectorAll('.product')
        function showItems(item){
            if(item.innerHTML.includes(e.target.value) === true){
                item.style.display = 'block'
            }else{
                item.style.display = 'none'
            }
        }

        items.forEach(showItems)


        
    }

    function arrayPrice(){
        const check = header.querySelector('.active')
        const items = root.querySelectorAll('.product')
        
        if(check === null){
            copyProductsRefined.sort(function(a, b){
            return a.price - b.price
            })
            let itemIndex = 0
            function addOrders(item){
                let index = productsRefined.indexOf(item)
                items[index].style.order = String(itemIndex)
                itemIndex++
            }
            copyProductsRefined.forEach(addOrders)
            priceBtn.classList.add('active')    
        }else{
            function removeOrders(item){
                item.style.order = '0'
            }
            items.forEach(removeOrders)
            priceBtn.classList.remove('active')
        }
    }


    // function arrayPrice(){
    //     const check = header.querySelector('.active')
    //     if(check === null){
    //         root.innerHTML = ""
    //         copyProductsRefined.sort(function(a, b){
    //         return a.price - b.price
    //         })
    //         copyProductsRefined.forEach(displayProduct)
    //         priceBtn.classList.add('active')    
    //     }else{
    //         root.innerHTML = ""
    //         productsRefined.forEach(displayProduct)
    //         priceBtn.classList.remove('active')
    //     }
        
    // }

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    const copyProductsRefined =[...productsRefined]

    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
    

    search.addEventListener('input', searchItems)
    
    priceBtn.addEventListener('click', arrayPrice)
    


})