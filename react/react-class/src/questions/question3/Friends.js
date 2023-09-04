import React, { Component } from "react";

class Friends extends Component{
    state = {
        friends: [
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
        ],
        updatedFriends: null
    }

    // 구현하기
    filterCity = (city) => {
        let { friends, updatedFriends } = this.state
        let filterFriends = []
        friends.map((friend) => {
            if(friend.city === city){
                filterFriends.push(friend)
            }
        })
        this.setState({
            updatedFriends: filterFriends
        })
    }
    
    // 구현하기
    render(){
        let { friends, updatedFriends } = this.state

        return (
            <>
                <button onClick={() => this.filterCity("seoul")}>서울</button>
                <button onClick={() => this.filterCity("busan")}>부산</button>
                <button onClick={() => this.filterCity("daegu")}>대구</button>
                <h1>필터링된 사용자 조회</h1>
                {updatedFriends === null? friends.map((friend) => {
                    return <h3>이름: {friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
                }):
                updatedFriends.map((friend) => {
                    return <h3>이름: {friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
                })}
            </>
        ) 
    }
}

export default Friends