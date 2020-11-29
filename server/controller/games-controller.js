var gamedb = require('../moogodb/gamedb.js')
var userController = require('./user-controller.js')

module.exports.ApiListGame = async function(req,res){
    var listGame = await gamedb.find();
    res.json(listGame)
}

module.exports.CreateGame = function(req,res){
    res.render('admin_game/games')
}

module.exports.AddGame = async function(req,res){
    var game = [{
        "name": req.body.name,
        "namePage": req.body.namePage,
        "imageBackGournd": req.body.imageBackGournd,
        "imageBackgourndGames": req.body.imageBackgourndGames,
        "imageOne": req.body.imageOne,
        "imageTwo": req.body.imageTwo,
        "imageThree": req.body.imageThree,
        "detail":{
            "date": req.body.date,
            "update": req.body.update,
            "version": req.body.version,
            "developer": req.body.developer,
            "publish": req.body.publish,
        },
        "updateUp": req.body.updateUp,
        "description":{
            "numberOne": req.body.numberOne,
            "numberTwo": req.body.numberTwo,
            "numberThree": req.body.numberThree,
            "numberFour": req.body.numberFour,
            "numberFive": req.body.numberFive
        },
        "minimum":{
            "os": req.body.os,
            "processor": req.body.processor,
            "memory": req.body.memory,
            "graphics": req.body.graphics,
            "directX": req.body.directX,
            "storage": req.body.storage
        },
        "recommended":{
            "os1": req.body.os1,
            "processor1": req.body.processor1,
            "memory1": req.body.memory1,
            "graphics1": req.body.graphics1,
            "directX1": req.body.directX1,
            "storage1": req.body.storage1
        },
        "category":[
            req.body.category1,req.body.category2,req.body.category3
        ],
        "view": req.body.view,
        "link":{
            "googleDrive": req.body.googleDrive
        }
    }]
    await gamedb.insertMany(game)
    res.render('admin_game/games')
}

module.exports.checkLogin = function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('http://localhost:3000/login')
    }
    next()
}

module.exports.postComment = function(req,res){
    console.log(req.body)
}