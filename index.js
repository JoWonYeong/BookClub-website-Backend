const express = require('express')
// const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = new express()
app.set('view engine', 'ejs')
mongoose.connect('mongodb+srv://wswy:qqqq1234@cluster0.4w5kq.mongodb.net/bookClub_db', { useUnifiedTopology: true, useNewUrlParser: true })

const formCheckMiddleWare = require('./middleware/formCheckMiddleware')
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const notAuthMiddleware = require('./middleware/notAuthMiddleware')
const selectedReportMiddleware = require('./middleware/selectedReportMiddleware')
global.loggedIn = null
global.match = 0

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/reports/store', formCheckMiddleWare)
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

const indexController = require('./controllers/indexCon')
const bestBookController = require('./controllers/bestBookCon')
const introduceClubController = require('./controllers/introduceClubCon')
const rentalController = require('./controllers/rentalCon')
const reportsController = require('./controllers/reportsCon')
const newReportController = require('./controllers/newReportCon')
const selectedController = require('./controllers/selectedCon')
const storeReportController = require('./controllers/storeReportCon')
const newUserController = require('./controllers/newUserCon')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/loginCon')
const loginUserController = require('./controllers/loginUserCon')
const logoutController = require('./controllers/logoutCon')
const deleteController = require('./controllers/deleteCon')

app.get('/', indexController)

app.get('/bestBook', bestBookController)

app.get('/introduceClub', introduceClubController)

app.get('/rentalBook', rentalController)

app.get('/reports', reportsController)

app.get('/reports/new', authMiddleware, newReportController)

app.get('/reports/:id', selectedReportMiddleware, selectedController)

app.get('/auth/register', notAuthMiddleware, newUserController)

app.get('/auth/login', notAuthMiddleware, loginController)

app.get('/auth/logout', authMiddleware, logoutController)

app.get('/reports/delete/:id', deleteController)


app.post('/reports/store', authMiddleware, storeReportController)

app.post('/users/register', notAuthMiddleware, storeUserController)

app.post('/users/login', notAuthMiddleware, loginUserController)


let port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('App listening...')
})