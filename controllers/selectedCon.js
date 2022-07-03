const BookReport = require('../models/BookReport.js')

module.exports = async (req, res) => {
    const bookreport = await BookReport.findById(req.params.id)
    res.render('selectedReport', { bookreport })
}