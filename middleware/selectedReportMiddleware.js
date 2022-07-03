const BookReport = require('../models/BookReport')

module.exports = async (req, res, next) => {
    match = 0
    const bookreport = await BookReport.findById(req.params.id)


    if (req.session.realId == bookreport.id) {
        match = 1
    }
    next()
}