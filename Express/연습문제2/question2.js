const express = require('express')
const app = express()
const logger = require('morgan')
const axios = require('axios')
const mongoose = require('mongoose')
// const user = require('./User')
// const book = require('./Book')


const CONNECT_URL = 'mongodb://127.0.0.1:27017/Jeee'
mongoose.connect(CONNECT_URL)
.then(() => console.log('mongodb connected...'))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

// 1. 로그기록
const log = function(req, res, next){
    console.log(new Date())
    next()
}
app.use(log)

const books = {"홍길동": [], "김영희": [], "김철수" : []}

// 2. /users/:name/books => req.params.name => req.user
app.use('/users/:uname/books*', function(req, res, next){
    req.user = req.params.uname
    next()
})

// 현재 사용자의 전체 도서 목록 조회
app.get('/users/:uname/books', function(req, res, next){
    res.json(books[req.user])
})

// 현재 사용자의 도서 목록에 특정 도서 추가
app.post('/users/:uname/books', function(req, res, next){
    for(const user in books){
        if(req.user === user){
            books[user].push(req.query.book)
        }
    }
    res.send(`${req.query.book}`)
})

// 현재 사용자의 특정 도서 조회
app.get('/users/:uname/books/:name', function(req, res, next){
    if(books[req.user].includes(`${req.params.name}`))
    res.send(`${req.params.name}`)
    else res.send(`도서를 찾을 수 없습니다.`)
})

// 현재 사용자의 특정 도서 변경
app.put('/users/:uname/books/:name', function(req, res, next){
    if(books[req.user].includes(`${req.params.name}`)){
        index = books[req.user].indexOf(`${req.params.name}`)
        books[req.user].splice(index, 1, req.query.book)
        res.send(`${books[req.user][index]}`)
    }else{
        res.send(`${req.user}에 해당 도서(${req.params.name})가 없습니다.`)
    }
})

// 현재 사용자의 특정 도서 삭제
app.delete('/users/:uname/books/:name', function(req, res, next){
    if(books[req.user].includes(`${req.params.name}`)){
        index = books[req.user].indexOf(`${req.params.name}`)
        books[req.user].splice(index, 1)
        res.send(`${books[req.user]}`)
    }else{
        res.send(`${req.user}에 해당 도서가 없습니다.`)
    }
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})