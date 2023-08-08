const mongoose = require('mongoose')
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema 
const moment = require('moment')

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,
    },
    isBorrowing: {
        type: Boolean,
        default: false,
    },
    borrowing: {
        type: String,
        trim: true,
    },
    borrowedAt: {
        type: Date,
    },
    ReturnedAt: {
        type: Date,
    },
    overdueAt: {
        type: Date,
    },
    joinedAt: {
        type: String,
        default: moment().format('YYYY-MM-DD')
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User

// const user = new User({
//     name: '제제',
//     contact: '1234-5678'
// })
// user.save()
// .then(() => console.log('user created !'))