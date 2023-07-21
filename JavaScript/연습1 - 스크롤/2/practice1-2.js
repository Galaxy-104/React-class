const container = document.querySelector('.container')
const view = document.querySelector('.view-box')
const items = document.querySelectorAll('.item')
const viewCoords = view.getBoundingClientRect()
const viewXcenter = viewCoords.width / 2
const viewYcenter = viewCoords.height / 2 
let coords = container.getBoundingClientRect()
let xcenter = coords.width / 2
let ycenter = coords.height / 2
const Radius = 350
const scrollHeigth = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
const clientHeight = document.documentElement.clientHeight

function degToRad(deg){
    return deg * (Math.PI / 180)
}

function setPosition(xc, yc, R, delta){
    const radian = degToRad(delta)
    const x = R * Math.cos(radian) + xc
    const y = R * Math.sin(radian) + yc
    return [x, y]
}

function circleItems(){
    for(let i = 0; i < items.length; i++){
        const [x, y] = setPosition(xcenter, ycenter, Radius, 360/items.length * (i + 1))
        items[i].style.left = `${x}px`
        items[i].style.top = `${y}px`
    }
}


function scrollCircular(){
    const theta = window.pageYOffset / (scrollHeigth - clientHeight) * 360
    container.style.transform = `translate(-50%, -50%) rotate(${theta}deg)`
}

function changeCenter(){
    coords = container.getBoundingClientRect()
    xcenter = coords.width / 2
    ycenter = coords.height / 2
    circleItems()
}

circleItems()


window.addEventListener('scroll', scrollCircular)
window.addEventListener('resize', changeCenter)