const BookReport = require('../models/BookReport.js')

module.exports = async (req, res) => {
    const bookreports = await BookReport.find({})
    res.render('reports', { bookreports })
}