module.exports = (req, res, next) => {
    if (req.body.title == "" || req.body.body == "") {
        return res.redirect('/reports/new')
    }
    next()
}