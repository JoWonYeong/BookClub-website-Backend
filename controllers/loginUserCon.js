const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = (req, res) => {
    const { id, password } = req.body

    User.findOne({ id: id }, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    req.session.userId = user._id
                    req.session.realId = user.id
                    req.session.nickname = user.nickname
                    res.redirect('/')
                }
                else {
                    res.redirect('/auth/login')
                }
            })
        }
        else {
            res.redirect('/auth/login')
        }
    })
}