const BookReport = require('../models/BookReport.js')
const path = require('path')

module.exports = async (req, res) => {
    await BookReport.create({
        id: req.session.realId,
        title: req.body.title,
        body: req.body.body,
        nickname: req.session.nickname
    })
    res.redirect('/reports')
}