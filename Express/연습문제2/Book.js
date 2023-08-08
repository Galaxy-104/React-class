const mongoose = require('mongoose')
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema 
const moment = require('moment')

const bookSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    isBorrowing: {
        type: Boolean,
        default: false,
    },
    borrowingUser: {
        type: ObjectId,
        ref: 'User',
    },
    borrowedAt: {
        type: String,
    },
    ReturnedAt: {
        type: Date,
    }
})

// const Book = mongoose.model('Book', bookSchema)
// module.exports = Book

// const book  = new Book({
//     title: '타이밍',
//     author: '강풀'
// })
// book.save()
// .then(() => console.log('Book created !'))