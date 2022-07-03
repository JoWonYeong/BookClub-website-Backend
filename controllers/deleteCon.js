const BookReport = require('../models/BookReport.js')

module.exports = async (req, res) => {
    const bookreport = await BookReport.findById(req.params.id)
    var id = bookreport._id

    BookReport.findByIdAndDelete(id, (err, bookreport) => { })
    res.redirect('/reports')
}