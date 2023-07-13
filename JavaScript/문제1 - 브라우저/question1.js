const nav = document.createElement('div')
nav.id = 'nav'

const title = document.createElement('div')
title.id = 'title'

const photoList = document.createElement('div')
photoList.id = 'photo-list'

document.body.append(nav, title, photoList)

const menu = document.createElement('div')
menu.id = 'menu'

const screenMode = document.createElement('div')
screenMode.id = 'screen-mode'

const profileMenu = document.createElement('div')
profileMenu.id = 'profile-menu'

nav.append(menu, screenMode, profileMenu)

const circleBtn = document.createElement('div')
circleBtn.id = 'circle-btn'

screenMode.appendChild(circleBtn)

for(let i = 0; i < 3; i++){
    const bar = document.createElement('div')
    bar.className = 'bar'
    menu.appendChild(bar)
}

const img = document.createElement('img')
img.src = ' '
img.alt = ' '

profileMenu.appendChild(img)

const center = document.createElement('div')
center.id = 'center'

title.appendChild(center)

const heading = document.createElement('div')
heading.id = 'heading'

const search = document.createElement('div')
search.id = 'search'

center.append(heading, search)

const h1 = document.createElement('h1')
h1.innerText = "My photo gallery"
const h4 = document.createElement('h4')
h4.innerText = "my old memories from my life"

heading.append(h1, h4)

const searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search photo ...'

search.appendChild(searchInput)

for(let i = 0; i < 9; i++){
    const photoContainer = document.createElement('div')
    photoContainer.className = 'photo-container'
    photoList.appendChild(photoContainer)

    const photoCard = document.createElement('div')
    photoCard.className = 'photo-card'

    const img = document.createElement('img')
    img.src = ' '
    img.alt = ' '
    photoCard.appendChild(img)

    const photoName = document.createElement('div')
    photoName.className = 'photo-name'
    photoName.innerText = '이름'
    
    photoContainer.append(photoCard, photoName)
}

const modalWindow = document.createElement('div')
modalWindow.className = 'modal-window'
document.body.appendChild(modalWindow)

const header = document.createElement('div')
header.id = 'header'

const body = document.createElement('div')
body.id = 'body'

const p = document.createElement('p')
p.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi nesciunt facilis tempora qui temporibus, odio dolores reiciendis, quis voluptate ducimus quam. Voluptatum omnis, rem quam porro ipsam nam dolorum.
Laudantium aliquam suscipit, nobis exercitationem neque inventore incidunt quos possimus numquam! Temporibus adipisci, illum in fuga earum magnam consequatur minima. Neque, labore esse tempora tenetur doloribus beatae. Facere, dolorum incidunt?
Nulla facere earum fuga doloremque magni. Aspernatur excepturi ipsam commodi in ullam? Dolore, ipsa, a dignissimos, vel nulla alias accusantium qui voluptatibus officia minus est libero! Adipisci, fugit? Architecto, quia!`

body.appendChild(p)

const footer = document.createElement('div')
footer.id = 'footer'

const button = document.createElement('button')
button.innerText = 'close'
footer.appendChild(button)

modalWindow.append(header, body, footer)

const changeH4 = document.querySelector('h4')
changeH4.innerText = 'Minions'

const changeProfileMenu = document.querySelector('#profile-menu > img')
changeProfileMenu.src = 'https://sui.ssgcdn.com/cmpt/banner/202207/2022071513363692604986442498_570.jpg'

const changeThridImg = document.querySelector('#photo-list .photo-container:nth-child(3) .photo-card img')
changeThridImg.src = 'https://i.namu.wiki/i/cS4lR_Kmb2H-LcVV0ge9eaLsenhaeSnoZ-NhIkiv4xn_GvCYStjYniOKQVAlk6WJaRyXNIkZ2_peC__BnibDFg.webp'

const changeFifthName = document.querySelector('#photo-list .photo-container:nth-child(5) .photo-name')
changeFifthName.innerText = '스튜어트'

const changeClassName = document.querySelector('.modal-window')
changeClassName.className = 'modal-window hide'