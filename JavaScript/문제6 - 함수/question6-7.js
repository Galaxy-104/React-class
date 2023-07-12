const numbers = [121, 23, 345, 43, 59]

function pickIndex(len){
    return Math.floor(Math.random() * len)
}
function shuffle(arr){
    // 구현하기

    function changeNumber(number, index){
        const randomIndex = pickIndex(arr.length)
        const pickNumber = arr[randomIndex]
        let temp = number
        number = arr[randomIndex]
        arr[randomIndex] = temp
        console.log(arr)

        return number
    }
    const randomArr = arr.map(changeNumber)
    // console.log(randomArr)
}

console.log(shuffle(numbers))