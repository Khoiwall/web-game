var express = require('express')
var gameController = require('../controller/games-controller.js')
var router = express.Router()

router.get('/list-game', gameController.ApiListGame)
router.get('/create-game',gameController.CreateGame)
router.post('/create-game',gameController.AddGame)
module.exports = router