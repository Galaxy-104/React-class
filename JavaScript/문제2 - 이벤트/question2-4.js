const circle = document.querySelector('.circle')


function addImg(e){
    const div = document.createElement('div')
    document.body.appendChild(div)

    div.className = 'circle'
    const mouseX = e.clientX
    const mouseY = e.clientY
    div.style.left = mouseX + 'px'
    div.style.top = mouseY + 'px'
}

window.addEventListener('click', addImg)