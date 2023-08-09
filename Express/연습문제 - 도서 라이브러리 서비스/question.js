const express = require('express')
const app = express()
const logger = require('morgan')
const axios = require('axios')
const mongoose = require('mongoose')
const usersRouter = require('./src/routes/users')
const booksRouter = require('./src/routes/books')


const CONNECT_URL = 'mongodb://127.0.0.1:27017/Jeee'
mongoose.connect(CONNECT_URL)
.then(() => console.log('mongodb connected...'))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

// 라우터 핸들러함수 임포트
app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})