const photos = document.getElementById('photos')
const photosLength = photos.querySelectorAll('.photo').length // 사진의 총 갯수
const selection = document.querySelector('#selection') // 인디케이터 컨테이너
const widthOfPhoto = 500 // 사진너비 
const imgs = photos.querySelectorAll('.photo')
let timerID = null // 타이머 ID
let index = 0 // 사진 인덱스

function clickselector(e){
    if(e.target.className === 'options'){
       const target = document.querySelector('.active')
      target.classList.remove('active')
      e.target.classList.add('active')
      const targetID = e.target.dataset.id
      const img = imgs[targetID]
      if(targetID === img.id){
         photos.style.marginLeft = -1 * targetID * widthOfPhoto + 'px'
          index = targetID
      }
    }
}


function changeIndicator(index){
  const prevIndicator = selection.querySelector('.active') // 이전 인디케이터 비활성화
  prevIndicator.classList.remove('active')
  const activeIndicator = selection.querySelectorAll('.options')[index] // 현재 인디케이터 활성화
  activeIndicator.classList.add('active')
}

function changePosition(){
  index++
  if(index > photosLength - 1){ // 인덱스 초기화
    index = 0 
  }
  photos.style.marginLeft = -1 * index * widthOfPhoto + 'px' // 왼쪽으로 이동
  changeIndicator(index) // 인디케이터 변경
}
function startCarousel(){
  timerID = setInterval(changePosition, 1000)
}
function stopCarousel(){
  clearInterval(timerID)
}

selection.addEventListener('click', clickselector)
photos.addEventListener('mouseenter', startCarousel)
photos.addEventListener('mouseleave', stopCarousel)