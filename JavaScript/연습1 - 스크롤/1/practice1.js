const modalContainer = document.querySelector(".modal-container")
const container = document.querySelector('.container')
const openButton = document.querySelector('.background > button')
const closeButton = modalContainer.querySelector('button')
const album = document.querySelector('.album')
const imgContainer = album.querySelector('.img-container')

function openModal(){
    container.classList.add('show')
    document.body.style.overflow = 'hidden'
    openButton.style.opacity = '0'
    album.style.opacity = '0'
}

function closeModal(){
    container.classList.remove('show')
    document.body.style.overflow = 'auto'
    openButton.style.opacity = '1'
    album.style.opacity = '1'
}

function scrollImgs(){
    let windowScroll = document.documentElement.scrollTop
    let imgsTop = windowScroll
    let bodyWidth = document.documentElement.clientWidth
    if(bodywidth <imgsTop > 1845){
        imgsTop = 1845
    } 
    imgContainer.style.top = `-${imgsTop}px`
}

openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
window.addEventListener('scroll', scrollImgs)


