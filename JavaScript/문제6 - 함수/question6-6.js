// divider 함수 구현하기

function divider(flag, ...args){
    const newArr = args.map(function(arg){
        if(flag === 0) return arg
        return arg / flag
    })
    return newArr
}

// 테스트 케이스 
console.log(divider(2, 39, 4, 7, 28, 62, 28))
console.log(divider(0, 39, 4, 7, 28, 62, 28))