const dinner = document.querySelector('section.dinner')
const dinnerLines = dinner.querySelectorAll('.line')
const dinnerImgs = dinner.querySelectorAll('div > div')

const home = document.querySelector('section.home')
const homeLines = home.querySelectorAll('.line')
const homeImgs = home.querySelectorAll('div > div')

const fashion = document.querySelector('section.fashion')
const fashionLines = fashion.querySelectorAll('.line')
const fashionImgs = fashion.querySelectorAll('div > div')

const gardening = document.querySelector('section.gardening')
const gardeningLines = gardening.querySelectorAll('.line')
const gardeningImgs = gardening.querySelectorAll('div > div')



let fadeinIndex = 0
let fadeoutIndex = 0

function imgFadein(){
    let inner = lines[fadeinIndex].querySelectorAll('div')
    function showImg(img){
        return img.style.opacity = '1', img.style.zIndex = '2',
        img.style.transform = 'translateY(-40px)'
    }
    inner.forEach(showImg)
    fadeinIndex++
    if(fadeinIndex > lines.length - 1){
        fadeinIndex = 0
    }
    setTimeout(hideImg, 5000)
}

function hideImg(){
    function imgFadeout(){
        let inner = lines[fadeoutIndex].querySelectorAll('div')
        function disappearImg(img){
            return img.style.opacity = '0', img.style.zIndex = '0',
            img.style.transform = 'translateY(-80px)'
        }
        inner.forEach(disappearImg)
        fadeoutIndex++
        if(fadeoutIndex > lines.length - 1){
            fadeoutIndex = 0
        }
        
    }
    imgFadeout()

    // setInterval(imgFadeout, 500)
}

const startImg = setInterval(imgFadein, 500)

const slideInf = setInterval(dinnerslide, 30000)
