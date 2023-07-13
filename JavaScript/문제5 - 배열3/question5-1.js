const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

// 구현하기
function cityName(a, b){
    return a.city < b.city ? -1: 1
}
friends.sort(cityName)

const index = friends.findIndex(friend => friend.city === 'seoul')
const seoulFriends = friends.slice(index)

seoulFriends.sort((a, b) => a.age - b.age)

console.log(seoulFriends)