require('dotenv').config() // call value envir

const express = require('express')
var pug = require('pug')
const app = express()
const port = 5000
var cors = require("cors");
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var gamesRouter = require('../server/Router/games-Router.js')
var userRouter = require('../server/Router/user-Router.js')

mongoose.connect(process.env.MoGOURL);

app.use(cookieParser(process.env.login))
app.set('view engine', 'pug');
app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})
app.use('/games', gamesRouter)
app.use('/user',userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})