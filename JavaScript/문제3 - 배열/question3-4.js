const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]


function searchMovie(movie){
    let year = movie.release.split('-')[0]
    return Number(year) < 2010 && movie.title.startsWith('J') 
}

const found = movies.find(searchMovie)
console.log(found)