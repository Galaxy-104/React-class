const container = document.querySelector('.container')
let isDown = false // 플래그 : 현재 마우스 클릭 여부 판단
let startX // 마우스 클릭시 마우스의 X 좌표
let scrollLeft // 최근 스크롤바 위치 저장

container.addEventListener('mousedown', e => {
    isDown = true
    container.classList.add('active')
    // 컨테이너 기준 현재 마우스의 x좌표 저장
    startX = e.pageX - container.offsetLeft
    // 현재 스크롤바 위치 저장
    scrollLeft = container.scrollLeft
})

function deactive(){
    isDown = false
    container.classList.remove('active')
}

container.addEventListener('mouseleave', deactive)
container.addEventListener('mouseup', deactive)

container.addEventListener('mousemove', e =>{
    if(!isDown) return
    e.preventDefault()
    // 마우스가 드래그 될 때 마우스의 x 좌표
    const x = e.pageX - container.offsetLeft
    // 마우스 클릭 지점에서 드래그 한 거리
    const walk = x - startX
    // 최근 스크롤바 위치에서 마우스 이동 거리만큼 더하거나 빼야함
    container.scrollLeft = scrollLeft - walk
})