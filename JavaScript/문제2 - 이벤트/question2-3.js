const container = document.getElementById('container')
const text = 'You are watching text now !'


let i = 0
function showText(){
    console.log(text[i])
    i++;
    if(i > text.length-1){
    clearInterval(textTimer)
    }
}


const textTimer = setInterval(showText, 1000)

