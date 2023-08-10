const express = require('express')
const User = require('../models/User')
const expressAsyncHandler = require('express-async-handler')
const { generateToken, isAuth, isAdmin } = require('../../../auth')

const router = express.Router()

// 회원가입
router.post('/register', expressAsyncHandler(async (req, res, next) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        userId: req.body.userId,
        password: req.body.password,
        email: req.body.email,
        contact: req.body.contact,
    })

    const newUser = await user.save() 
    if(!newUser){
        res.status(401).json({ code: 401, message: 'Invalid User Data'})
    }else{
        const { name, email, userId, contact, isAdmin, joinedAt } = newUser 
        res.json({
            code: 200,
            token: generateToken(newUser),
            name, userId, email, contact, isAdmin, joinedAt
        })
    }
}))

// 로그인
router.post('/login', expressAsyncHandler(async (req, res, next) => {
    console.log(req.body)
    const loginUser = await User.findOne({
        userId: req.body.userId,
        password: req.body.password,
    })
    if(!loginUser){
        res.status(401).json({ code: 401, message: 'Invalid ID or Password'})
    }else{
        const { name, email, userId, contact, isAdmin, joinedAt } = loginUser
        res.json({
            code: 200,
            token: generateToken(loginUser),
            name, userId, email, contact, isAdmin, joinedAt
        })
    }
}))

router.post('/logout', (req, res, next) => {
    res.json("로그아웃")
})

router.put('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404).json({ code: 404, message: 'User Not Founded'})
    }else{
        user.name = req.body.name || user.name
        user.password = req.body.password || user.password
        user.email = req.body.email || user.email
        user.contact = req.body.contact || user.contact
        const updatedUser = await user.save()
        const { name, userId, email, contact, isAdmin, joinedAt } = updatedUser
        res.json({
            code: 200,
            token: generateToken(updatedUser),
            name, userId, email, contact, isAdmin, joinedAt
        })
    }
}))

router.delete('/:id', isAdmin, expressAsyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        res.status(404).json({ code: 404, message: 'User Not Founded'})
    }else{
        res.status(204).json({ code: 204, message: 'User deleted successfully !'})
    }
}))


module.exports = router