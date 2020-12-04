require('dotenv').config() // call value envir

const express = require('express')
var cookieSession = require('cookie-session')
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
app.use(cookieSession({
  name:'userId',
  keys:['key1'],
  cookie:{
    signed: true,
    expires: new Date(Date.now() + 900000)
  }
}))
app.set('view engine', 'pug');
app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.cookie('_ip_bm',ip,{
    httpOnly:true,
    expires: new Date(Date.now() + 900000),
  })
  res.cookie('_uuXD',makeid(20),{
    httpOnly:true,
    expires: new Date(Date.now() + 900000),
  })
  res.cookie('_sg_bm',makeid(20),{
    expires: new Date(Date.now() + 900000),
  })
  res.redirect('http://localhost:3000')
})
app.use('/games', gamesRouter)
app.use('/user',userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})