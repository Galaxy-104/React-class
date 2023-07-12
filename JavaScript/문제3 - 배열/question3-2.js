const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]


// 영화의 발매일을 먼저 검색해야함.
// object.value를 숫자로 변환해서 2005년과 2010년 사이를 찾아야하나?

function searchMovie(movie){
    let year = movie.release.split('-')[0]
    return Number(year) > 2005 && Number(year) < 2010 
    
}

const found = movies.find(searchMovie)
console.log(found)