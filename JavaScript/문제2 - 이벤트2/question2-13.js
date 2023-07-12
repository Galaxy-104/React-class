const boxContainer = document.getElementById('box-container')
const boxs = boxContainer.querySelectorAll('.box')
const box = boxContainer.querySelector('.box')

let index = 0

function moveBox(){
    if(index > boxs.length - 1){
        index = 0
    }
    const prevBox = boxContainer.querySelector('.active')
    if(prevBox !== null){
        prevBox.classList.remove('active')
    }
   
    boxs[index].classList.add('active')
    index++    
}

// 원이 정해진 시간마다 위로 올라갔다가 내려오길 반복해야함
// 정렬된 순서대로 하나씩

setInterval(moveBox, 300)