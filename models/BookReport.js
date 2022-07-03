const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookReportSchema = new Schema({
    id: String,
    title: String,
    body: String,
    nickname: String
})

const BookReport = mongoose.model('BookReport', BookReportSchema)
module.exports = BookReport