const img = document.querySelector('#img')


function hideImg(){
    img.style.display = 'none'
}

function showImg(){
    img.style.display = 'block'
    setTimeout(hideImg, 3000)
}

function start(){
    setTimeout(showImg, 1000)
}

window.addEventListener('load', start)