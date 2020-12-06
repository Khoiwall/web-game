const { Router } = require('express')
var express = require('express')
var userController = require('../controller/user-controller.js')
var router = express.Router()

router.get('/ApiUser', userController.ApiListUser)
router.post('/sign-up', userController.AddUser)
router.get('/apiErrorSignUp',userController.checkErrorSignUp)
router.post('/login', userController.login)
router.get('/ApiUserLogin',userController.ApiLogin)
router.get('/apiErrorLogin', userController.checkErrorLogin)
router.post('/comment', userController.postComment)
router.get('/signOut',userController.signOut)
module.exports = router