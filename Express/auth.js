const config = require('./config')
const jwt = requrire('jsonwebtoken')


const generateToken = (user) => { // 토큰 생성
    return jwt.sign({
        _id: user._id,
        name: user.name,
        userId: user.Id,
        password: user.password,
        contact: user.contact,
        email: user.email,
        contact: user.contact,
        joinedAt: user.joinedAt,
    },
    config.JWT_SECRET,
    {
        expiresIn: '1d',
        issuer: 'J'
    })
}

const isAuth = (req, res, next) => { // 사용자 확인
    const bearerToken = req.headers.authorization
    if(!bearerToken){
        res.status(401).json({message: 'Token is not supplied'})
    }else{
        const token = bearerToken.slice(7, bearerToken.length)
        jwt.verify(token, config.JWT_SECRET, (err, userInfo) => {
            if(err && err.name === 'TokenExpiredError'){
                res.status(419).json({ code: 419, message: 'token expired !'})
            }else if(err){
                res.status(401).json({ code: 401, message: 'Invalid Token !'})
            }
            req.user = userInfo
            next()
        })
    }
}

const isAdmin = (req, res, next) => { // 관리자 확인
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).json({ code: 401, message: 'You are not vaild admin user !'})
    }
}

module.exports = {
    generateToken,
    isAuth,
    isAdmin,
}