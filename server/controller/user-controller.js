var userdb = require('../moogodb/userdb.js')

module.exports.ApiListUser = async function(req,res){
    var listUsers = await userdb.find()
    res.json(listUsers)
}

module.exports.AddUser = async function(req,res){
    await userdb.insertMany(req.body)
    req.body = []
    res.redirect('http://localhost:3000')
}