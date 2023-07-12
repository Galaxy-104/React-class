function findMaxValue(...args){
    const filterNumber = args.filter(function(arg){
        if(parseFloat(arg) !== NaN)
        return parseFloat(arg)
    })
    filterNumber.sort((a, b) => a - b)
    console.log(filterNumber)
    return filterNumber[filterNumber.length-1]
    // 구현하기
}


// 테스트 케이스 
console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))