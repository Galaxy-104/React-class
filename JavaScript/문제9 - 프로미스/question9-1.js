const container = document.querySelector('.container')

function loadMovie(url){
    return fetch(url)
    .then(response => response.json())
}

function createMoviesCard(movies){
    function displayMoviesCard(movie, index){
        const divProduct = document.createElement('div')
        divProduct.className = 'card'
        divProduct.innerHTML =

        `<div class="movie-info">
            <a href="${movie.url}" target="_blank">
                <div class="movie-img"></div>
            </a>
            
            <div class="movie-text">
                <h3 class="title">${movie.title_long}</h3>
                <p class="genres">장르 <span>${movie.genres[0]}</span></p>
                <p class="runtime">러닝타임 <span>${movie.runtime}분</span></p>
                <p class="rating">평점 ⭐<span>${movie.rating}<span></p>
            </div>
        </div>
        <div class="summary">
            <p>${movie.summary}</p>
        </div>`

        container.appendChild(divProduct)

        const movieImgs = document.querySelectorAll('.movie-img')
        movieImgs[index].style.background = `url(${movie.large_cover_image}) center no-repeat`
        movieImgs[index].style.backgroundSize = 'cover'

    }
    movies.forEach(displayMoviesCard)
}

loadMovie('https://yts.mx/api/v2/list_movies.json')
.then(movieData => movieData.data.movies)
.then(movies => createMoviesCard(movies))
