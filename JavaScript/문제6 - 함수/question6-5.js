function add(...args){
    console.log(args)
    let sum = 0
    for(let arg of args){
        if(isNaN(parseFloat(arg)) !== true){
            sum += parseFloat(arg)
        }
    }
    return sum
    
    // 구현하기
}

// 테스트 케이스
console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9