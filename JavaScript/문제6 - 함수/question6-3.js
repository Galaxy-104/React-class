// getDistance 함수 구현하기

function getDistance(...args){
    let subtractX = 0
    let subtractY = 0
    for(i = 0; i < args.length; i++){
        if((i + 2) % 2 === 0 ){
            subtractX += args[i].x
            subtractY += args[i].y
        }else{
            subtractX -= args[i].x
            subtractY -= args[i].y
        }
    }
    return Math.sqrt(subtractX**2 + subtractY**2)

}
 
 // 테스트 케이스
 console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
 console.log(getDistance({x: 3, y: 4}))