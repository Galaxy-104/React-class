const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
const userAge = document.getElementById('user-age') // 사용자 나이 입력창
const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
const users = [] // 사용자 리스트 배열


// 입력창 유효성 검증
function isValid(str){
    return str !== '' && str !== undefined
}

// user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
function buildElement(user){
    const userEl = document.createElement('div')
    userEl.className = 'user'
    userEl.innerHTML = `
        <p>Name: ${user.Name}</p>
        <p>Age: ${user.Age}</p>
        <p>Email: ${user.Email}</p>`
    return userEl
}
// users 배열을 이용하여 화면에 사용자 리스트 보여주기
function displayUsers(users){
    // userList 컨테이너 비우기
    userList.innerHTML = ""
    users.forEach(function(user){
        // buildElement(user)
        userList.appendChild(buildElement(user))// -> 사용자 각각에 대한 엘리먼트 
    })
    
    // user 배열 (사용자 정보 리스트) -> 사용자 정보를 담고 있는 엘리먼트 배열 -> buildElemet
    // userList 컨테이너에 사용자 정보를 담은 엘리먼트 추가 -> appendChild, innerHTML 
}

// 입력창 초기화
function initInput(){
    userName.value = ''
    userEmail.value = ''
    userAge.value = ''
}

// 사용자 추가하기
function addUser(){
    if(isValid(userName.value) && isValid(userAge.value) && isValid(userEmail.value) ){
        users.push({Name: userName.value, Age: userAge.value, Email: userEmail.value})
        initInput()
        // 사용자 화면에 보여주기 -> displayUsers 
        displayUsers(users)
    }else{
        alert('정보를 입력하세요.')
    }
}

submitBtn.addEventListener('click', addUser)
console.log(users)

// 버튼을 누르면 유저가 입력한 이메일이 저장되고,
// 그 이메일을 토대로 컨텐츠가 만들어져야 하고,
// 그 만들어진 컨텐츠가 계속 추가되면서 리스트가 되어야함.