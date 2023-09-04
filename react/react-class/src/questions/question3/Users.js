import React from "react";

function Users(){
    const users = [
        {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
        {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
        {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
        {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
        {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
        {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
        {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
        {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
        {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
        {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
    ]
    const filterUser = []
    users.map((user) => {
        if((user.age > 0 && user.age % 1 === 0) &&
        (user.email.includes('@') && user.email.includes('.com'))){
         filterUser.push(user)
        }
    })
    console.log(filterUser)
    
    return (
        <>
            <h1>*유효한 사용자 정보*</h1>
            {filterUser.map((user) => {
                return (
                    <>
                    <h3>{user.name} ({user.age})</h3>
                    <h3>{user.city}</h3>
                    <h3>{user.email}</h3>
                    <h3>----------------</h3>
                    </>
                )
            })
            }
        </>
    )
}

export default Users