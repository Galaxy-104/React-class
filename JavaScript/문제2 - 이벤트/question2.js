const tiles = document.querySelectorAll('.tile')

function randomcolor(e){
    const randomR = Math.floor(Math.random()*256)
    const randomG = Math.floor(Math.random()*256)
    const randomB = Math.floor(Math.random()*256)
    e.target.style.background = `rgb(${randomR} , ${randomG}, ${randomB})`
}

for(let tile of tiles){
    tile.addEventListener('click', randomcolor)
}
