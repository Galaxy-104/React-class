// 포켓몬 API
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// 화장품 API
// http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
const main = document.querySelector('main')
const itemContainer = main.querySelector('.item-container')
const modalContainer = document.querySelector('.modal-container')
const items = itemContainer.querySelectorAll('.item')
const selectedItems = modalContainer.querySelector('.selected-items')

const usersBookmarkBtn = document.querySelector('.buttons .users-bookmark')
const closeBtn = modalContainer.querySelector('button')

let startX
let isDown = false
let scrollLeft
let isClicked = false


fetch(API_URL)
.then(response => response.json())
.then(function(products){

    //  아이템 div 생성

    // 10개의 랜덤 인덱스 생성
    function pickIndex(len){
        return Math.floor(Math.random() * len)
    }
    
    const pickRandomIndex = []

    for(let i = 0; i < 10; i++){

        // 제품을 랜덤으로 선택
        let randomIndex = pickIndex(products.length)
        
        while(pickRandomIndex.includes(randomIndex)){
            randomIndex = pickIndex(products.length)
        }
        pickRandomIndex.push(randomIndex)

        // 제품 평점이 없는 경우
        if(products[pickRandomIndex[i]].rating === null){
            products[pickRandomIndex[i]].rating = ' '
        }

        // 제품 이름에 브랜드 이름 제거
        let productName = products[pickRandomIndex[i]].name.split(' ').splice(1).join(' ')

        // 랜덤 인덱스의 정보를 가지고 와서 div 만들기
        const div = document.createElement('div')
        div.className = 'item'
        div.innerHTML = `
        <div class="item-img">
            <img src="${products[pickRandomIndex[i]].image_link}" alt="">
            <div class="item-colors"></div>
        </div>
        <div class="item-info">
            <span>${productName}</span>
            <span>
                <span class="bold">Price </span>
                ${products[pickRandomIndex[i]].price}
            </span>
            <span>
                <span class="bold">Type </span>
                ${products[pickRandomIndex[i]].product_type}
            </span>
            <span class="rating">
                <span class="material-symbols-rounded">
                    star
                </span>
                ${(products[pickRandomIndex[i]].rating)}
            </span>
        </div>
        <button class="bookmark">
            <span class="material-symbols-rounded">
                thumb_up
            </span>
        </button>`
        itemContainer.appendChild(div)

        // 제품의 색상 정보 만들기

        let productColors = products[pickRandomIndex[i]].product_colors
        console.log(productColors)
        
        

    }

})





// 드래그앤드롭
itemContainer.addEventListener('mousedown', e => {
    isDown = true
    isClicked = true
    startX = e.pageX - itemContainer.offsetLeft
    scrollLeft = itemContainer.scrollLeft
})

itemContainer.addEventListener('mouseleave', () => {
    isDown = false;
    isClicked = false
})

itemContainer.addEventListener('mouseup', () => {
    isDown = false;
})

itemContainer.addEventListener('mousemove', e => {
    if(!isDown) return
    e.preventDefault()
    const x = e.pageX - itemContainer.offsetLeft
    const walk = x - startX
    itemContainer.scrollLeft = scrollLeft - walk
    isClicked = false
})

itemContainer.addEventListener('click', (e) => {
    if(isClicked && e.target.className === 'item'){
        
    }
    
})    
//     if(isClicked && e.target.className === 'item'){
//         const div = document.createElement('div')
//         console.log(e.target)
//         selectedItems.appendChild(e.target)
//         div.className = 'item'
//         div.innerText = `${String.fromCharCode(61)}`
//         itemContainer.appendChild(div)
//     }



usersBookmarkBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
    modalContainer.style.zIndex = '3'
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})


