const fruit = 'apple'
let printB = null

// 구현하기

function printA(){
    const fruit = 'banana'
    printB = function printB(){
        console.log(fruit)
    }
    console.log(fruit)
}


printA() // banana
printB() // banana
