const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]


function searchMovie(movie, index){
    const name = movie.title.includes('man')
    if(name === true) return movies[index]
}

const found = movies.find(searchMovie)
console.log(found)