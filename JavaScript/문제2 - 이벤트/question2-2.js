const count = document.getElementById('container')

let sum = 0

function counter(){
    sum++;
    count.innerText = `${sum}`
}

setInterval(counter, 1000)
