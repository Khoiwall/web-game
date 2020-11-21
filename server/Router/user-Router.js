const { Router } = require('express')
var express = require('express')
var userController = require('../controller/user-controller.js')
var router = express.Router()

router.get('/ApiUser', userController.ApiListUser)
router.post('/sign-up', userController.AddUser)

module.exports = router