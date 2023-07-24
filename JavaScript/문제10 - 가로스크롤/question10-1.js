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

const openBtn = document.querySelector('.buttons button:nth-child(2)')
const closeBtn = modalContainer.querySelector('button')

let startX
let isDown = false
let scrollLeft
let isClicked = false

fetch(API_URL)
.then(response => response.json())
.then(products => console.log(products))

//  아이템 div 생성
let j = 65
for(let i = 0; i < 20; i++){
    
    const div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `<button class="bookmark">
    <span class="material-symbols-rounded">
    star
    </span>
    </button>`
    j++
    itemContainer.appendChild(div)
}



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



openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})


