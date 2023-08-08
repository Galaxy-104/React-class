const mongoose = require('mongoose')
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema 
const moment = require('moment')

const bookSchema = new Schema({
    last: { type: String, required: true },
    first: { type: String, required: true }
})

const Author = mongoose.model('Author', AuthorSchema)
module.exports = User