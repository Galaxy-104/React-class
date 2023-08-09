const express = require('express')
const Book = require('../models/Book')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json("전체 도서 목록 조회")
})

router.get('/:title', (req, res, next) => {
    res.json("특정 도서 조회")
})

router.post('/', (req, res, next) => {
    res.json("특정 도서 추가")
})

router.put('/:id', (req, res, next) => {
    res.json("특정 도서 내용 변경")    
})

router.delete('/:id', (req, res, next) => {
    res.json("특정 도서 삭제")
})


module.exports = router