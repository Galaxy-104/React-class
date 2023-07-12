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

const seoul = []
const busan = []
const daegu = []


function foundFriend(friend){
    if(friend.city === 'seoul')
    return seoul.push(friend)
    else if(friend.city === 'busan')
    return busan.push(friend)
    friend.city === 'daegu'
    return daegu.push(friend)
}

friends.forEach(foundFriend)

console.log(`seoul :`, seoul.length)
console.log(`busan :`, busan.length)
console.log(`daegu :`, daegu.length)