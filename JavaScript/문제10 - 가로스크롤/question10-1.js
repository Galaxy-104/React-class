// 포켓몬 API
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// 화장품 API
// http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
const main = document.querySelector('main')
const itemContainer = main.querySelector('.item-container')
const modalContainer = document.querySelector('.modal-container')
const selectedItems = modalContainer.querySelector('.selected-items')
const itemPage = main.querySelector('.item-page')
const footer = document.querySelector('footer')

const usersBookmarkBtn = document.querySelector('.buttons .users-bookmark')
const closeBtn = modalContainer.querySelector('button')

let startX
let isDown = false
let scrollLeft
let isClicked = false


fetch(API_URL)
.then(response => response.json())
.then(function(products){

    //  상단 가로스크롤 아이템 div 생성

    // 10개의 랜덤 인덱스 생성
    function pickIndex(len){
        return Math.floor(Math.random() * len)
    }
    
    const pickRandomIndex = []

    for(let i = 0; i < 10; i++){

        // 제품을 랜덤으로 선택
        let randomIndex = pickIndex(products.length)
        
        while(pickRandomIndex.includes(randomIndex)){
            randomIndex = pickIndex(products.length)
        }
        pickRandomIndex.push(randomIndex)

        // 제품 평점이 없는 경우
        if(products[pickRandomIndex[i]].rating === null){
            products[pickRandomIndex[i]].rating = ' '
        }

        // 제품 이름에 브랜드 이름 제거
        let productName = products[pickRandomIndex[i]].name.split(' ').splice(1).join(' ')

        // 랜덤 인덱스의 정보를 가지고 와서 item div 만들기
        const div = document.createElement('div')
        div.className = 'item'
        div.dataset.id = `${i}`
        div.innerHTML = `
        <div class="item-img">
            <img src="${products[pickRandomIndex[i]].image_link}" alt="">
        </div>

        <div class="item-colors"></div>

        <div class="item-info">
            <span>${productName}</span>
            <span>
                <span class="bold">Price </span>
                ${products[pickRandomIndex[i]].price}
            </span>
            <span>
                <span class="bold">Type </span>
                ${products[pickRandomIndex[i]].product_type}
            </span>
            <span class="rating">
                <span class="material-symbols-rounded">
                    star
                </span>
                ${(products[pickRandomIndex[i]].rating)}
            </span>
        </div>
        <button class="bookmark">
            <span class="material-symbols-rounded">
                thumb_up
            </span>
        </button>`
        itemContainer.appendChild(div)

        // 제품의 색상 정보 만들기
        const createItems = main.querySelectorAll('.item')
        const itemColor = createItems[i].querySelector('.item-colors')
        let productColors = products[pickRandomIndex[i]].product_colors

        if(productColors.length !== 0){
            for(let i = 0; i < productColors.length; i++){
                const colorDiv = document.createElement('div')
                colorDiv.className = 'color'
                colorDiv.style.background = `${productColors[i].hex_value}`

                itemColor.appendChild(colorDiv)
            }
        }

        // 아이템 상세페이지 만들기
        const itemSection = document.createElement('section')
        itemSection.innerHTML = `
        <div class="details">
            <div class = "item-img">
                <img src="${products[pickRandomIndex[i]].image_link}">
            </div>
            <div class="item-informs">
                <h3>${productName}</h3>
                <p>
                    <span>Price </span>
                    ${products[pickRandomIndex[i]].price}
                </p>
                <p>
                    <span>Type </span>
                    ${products[pickRandomIndex[i]].product_type}
                </p>
                <p>
                    <span class="material-symbols-rounded">
                        star
                    </span>
                    ${(products[pickRandomIndex[i]].rating)}
                </p>
            </div>
        </div>
        <div class="item-description">
            <p>${products[pickRandomIndex[i]].description}</p>
        </div>
        `
        itemPage.appendChild(itemSection)

        const sections = main.querySelectorAll('.item-page > section')
        const itemInforms = sections[i].querySelector('.details > .item-informs')

        if(productColors.length !== 0){
            for(let i = 0; i < productColors.length; i++){
                const colorDiv = document.createElement('div')
                colorDiv.className = 'color'
                colorDiv.style.background = `${productColors[i].hex_value}`
                colorDiv.style.color = '#fff'
                colorDiv.innerHTML = `${productColors[i].colour_name}`

                itemInforms.appendChild(colorDiv)
            }
        }

    }

    const cardContainer = main.querySelector('.card-container')
    

    // 8개씩 로딩하는 무한스크롤 만들기
    let offset = 0
    function createEightItems(offset){
        for(let i = offset; i < offset + 8 && i < products.length; i++){
            let product = products[i]
            // 제품 평점이 없는 경우
            if(product.rating === null){
                product.rating = ' '
            }

            // 제품 이름에 브랜드 이름 제거
            let productName = product.name.split(' ').splice(1).join(' ')

            const cardDiv = document.createElement('div')
            cardDiv.className = 'card-item'
            cardDiv.innerHTML = `
            <div class="item-img">
                <img src="${product.image_link}" alt="">
            </div>

            <div class="item-colors"></div>

            <div class="item-info">
                <span>${productName}</span>
                <span>
                    <span class="bold">Price </span>
                    ${product.price}
                </span>
                <span>
                    <span class="bold">Type </span>
                    ${product.product_type}
                </span>
                <span class="rating">
                    <span class="material-symbols-rounded">
                        star
                    </span>
                    ${(product.rating)}
                </span>
            </div>
            <button class="bookmark">
                <span class="material-symbols-rounded">
                    thumb_up
                </span>
            </button>`
            cardContainer.appendChild(cardDiv)

            // 제품의 색상 정보 만들기
            const cardItems = main.querySelectorAll('.card-item')
            const carditemColor = cardItems[i].querySelector('.item-colors')
            let productColors = product.product_colors

            if(productColors.length !== 0){
                for(let i = 0; i < productColors.length; i++){
                    const colorDiv = document.createElement('div')
                    colorDiv.className = 'item-color'
                    colorDiv.style.background = `${productColors[i].hex_value}`

                    carditemColor.appendChild(colorDiv)
                }
            }
        }
    }
    createEightItems(offset)
    
    window.addEventListener('scroll', (event) => {
        const scrollHeight = Math.max(   // 전체문서 높이 (스크롤이벤트 내부에 있어야 함)
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
        );

        if(Math.abs(window.pageYOffset + document.documentElement.clientHeight - scrollHeight) < 100){
            console.log('@@')
            offset = offset + 8
            if(offset > products.length){
                offset = products.length
            }
            createEightItems(offset)
        }

        // sns버튼 구현하기
        const snsBtns = document.querySelector('.sns-btns')
        
        
        console.log(footer.getBoundingClientRect().top)
        console.log(snsBtns.getBoundingClientRect().top)

    })

})





// 드래그앤드롭
itemContainer.addEventListener('mousedown', e => {
    isDown = true
    isClicked = true
    startX = e.pageX - itemContainer.offsetLeft
    scrollLeft = itemContainer.scrollLeft
})

itemContainer.addEventListener('mouseleave', () => {
    isDown = false;
    isClicked = false
})

itemContainer.addEventListener('mouseup', () => {
    isDown = false;
})

itemContainer.addEventListener('mousemove', e => {
    if(!isDown) return
    e.preventDefault()
    const x = e.pageX - itemContainer.offsetLeft
    const walk = x - startX
    itemContainer.scrollLeft = scrollLeft - walk
    isClicked = false
})

// 아이템을 클릭했을 때 상세페이지가 나타나도록
itemContainer.addEventListener('click', (e) => {

    const sections = main.querySelectorAll('.item-page > section')
    if(isClicked && e.target.className !== 'bookmark' 
    && e.target.parentNode.className !== 'bookmark' 
    && e.target.className !== 'item-container'){
        let index = e.target.closest('.item').dataset.id
        sections.forEach((section) => {
            section.style.display = 'none'
            
        })
        sections[index].style.display = 'block'
    }
    
})

usersBookmarkBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
    modalContainer.style.zIndex = '3'
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})


