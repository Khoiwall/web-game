var express = require('express')
var gameController = require('../controller/games-controller.js')
var router = express.Router()

router.get('/list-game', gameController.ApiListGame)
router.get('/create-game',gameController.CreateGame)
router.post('/create-game',gameController.AddGame)
router.get('/search-game',gameController.sreachGame)
router.get('/API-search-game',gameController.ApiSearchGame)
module.exports = router