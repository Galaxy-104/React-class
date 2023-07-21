// 포켓몬 API
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

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


let j = 65
for(let i = 0; i < 20; i++){
    
    const div = document.createElement('div')
    div.className = 'item'
    div.innerText = `${String.fromCharCode(j)}`
    j++

    itemContainer.appendChild(div)
}




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
        const div = document.createElement('div')
        console.log(e.target)
        selectedItems.appendChild(e.target)
        div.className = 'item'
        div.innerText = `${String.fromCharCode(61)}`
        itemContainer.appendChild(div)
    }

})

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})


// function selectItem(e){
//     isClicked = true 
//     if(isClicked && e.target.className === 'item'){
//         console.log(e.target)
//     }
// }

// itemContainer.addEventListener('click', selectItem)
