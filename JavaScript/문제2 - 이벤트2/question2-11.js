const openBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')


function openSidebar(){
    sidebar.classList.add('show')
    setTimeout(closeSidebar, 3000)
}

function closeSidebar(){
    sidebar.classList.remove('show')
}

openBtn.addEventListener('click', openSidebar)
