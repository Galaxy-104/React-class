// countDuplication 함수 구현하기 

function countDuplication(flag, ...args){
    console.log(args)
    let sum = 0
    function countCat(element){
        if(flag === element){
            sum++
        }
    }
    args.forEach(countCat)
    return sum
}

// 테스트 케이스 
console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4