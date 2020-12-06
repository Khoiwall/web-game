var gamedb = require('../moogodb/gamedb.js')
var gameSearch = []

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
        },
        "comment": []
    }]
    await gamedb.insertMany(game)
    res.redirect('http://localhost:3000/admin/create-game')
}
module.exports.sreachGame = async function(req,res){
    q = req.query.NameGame
    var games = await gamedb.find()
    if(typeof q === 'string')
    {
        gameSearch = games.filter(item =>{
            return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        })
    }
    res.redirect('http://localhost:3000/games/search?NameGame=' + q)
}
module.exports.ApiSearchGame = function(req,res){
    res.json(gameSearch)
}