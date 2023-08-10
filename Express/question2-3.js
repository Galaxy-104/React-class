const express = require('express')
const app = express()
const logger = require('morgan')
const axios = require('axios')
const mongoose = require('mongoose')
const usersRouter = require('./연습문제 - 도서 라이브러리 서비스/src/routes/users')
const booksRouter = require('./연습문제 - 도서 라이브러리 서비스/src/routes/books')
const config = require('./config')
console.log(config)

// mongodb 연결하기
mongoose.connect(config.MONGODB_URL)
.then(() => console.log('mongodb connected...'))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

app.use(express.json()) // request body 파싱
app.use(logger('tiny'))

// 라우터 핸들러함수 임포트
app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)



app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})