const modalWindow = document.querySelector(".modal-window")
const container = document.querySelector('.container')
const openButton = document.querySelector('.background > button')
const closeButton = modalWindow.querySelector('button')


function openModal(){
    container.classList.add('show')
    document.body.style.overflow = 'hidden'
    document.body.style.padding = '0 17px 0 0'
}

function closeModal(){
    container.classList.remove('show')
    document.body.style.overflow = 'auto'
    document.body.style.padding = '0'
}

openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)