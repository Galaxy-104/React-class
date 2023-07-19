// 사용자 정보 조회
function loadUser(url){ 
    return fetch(url)
    .then(response => response.json())
}

// 깃허브 아바타 사진 조회
function loadGithubUser(name){
    return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
}

function showAvatar(githubUser){
    return new Promise(function(resolve, reject){
        let img = document.createElement('img')
        img.src = githubUser.avatar_url
        document.body.append(img)
    
        setTimeout(() => {
            img.remove()
            resolve(githubUser)
        }, 3000)
    })
}

loadUser('js/user.json')
.then(user => loadGithubUser(user.name))
.then(githubUser => showAvatar(githubUser))
.then(githubUser => alert('작업이 끝났습니다.'))