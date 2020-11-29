var userdb = require('../moogodb/userdb.js')
var userLogin = []
var errorSignUp = {email: '',username: '',password: ''}
var errorLogin;

module.exports.ApiListUser = async function(req,res){
    var listUsers = await userdb.find()
    res.json(listUsers)
}

module.exports.AddUser = async function(req,res){
    var listUser = await userdb.find() 
    var checkError = 0;
    for(var i = 0; i < listUser.length; i++){
        if(req.body.email === listUser[i].email){
            errorSignUp.email = 'Email đã có người sử dụng'
            checkError++
        }
        if(req.body.username === listUser[i].username){
            errorSignUp.username = 'User Name đã có người sử dụng'
            checkError++
        }
        if(req.body.password < 7 && req.body.password > 0){
            errorSignUp.password = 'Mật khẩu bắt buộc phải có từ 7 ký tự trở lên'
            checkError++
        }
    }
    if (checkError !== 0){
        res.redirect('http://localhost:3000/sign-up')
        checkError = 0;
    }
    else{
        userdb.insertMany(req.body)
        errorSignUp = {email: '',username: '',password: ''}
        res.redirect('http://localhost:3000')
    }
}

module.exports.checkErrorSignUp = function(req,res){
    res.json(errorSignUp)
}

module.exports.checkErrorLogin = function(req,res){
    res.json(errorLogin)
}

module.exports.login = async function(req,res){
    var loginByEmail = await userdb.find({email: req.body.emailOrUserName, password: req.body.password})
    var loginByUserName = await userdb.find({username: req.body.emailOrUserName, password: req.body.password})
    if (loginByEmail.length === 0 && loginByUserName.length == 0){
        res.redirect('http://localhost:3000/login')
        errorLogin = 'Tài khoản không tồn tại hoặc nhập sai'
    }
    else{
        if(loginByEmail.length === 0 && loginByUserName.length === 1){
            userLogin = loginByUserName
        }
        else{
            userLogin = loginByEmail
            
        }
        res.cookie('userId',userLogin._id,{
            signed: true
        })
        errorLogin = ''
        res.redirect('http://localhost:3000')
    }
}

module.exports.ApiLogin = function(req,res){
    res.json(userLogin[0])
}

module.exports.User = function(){
    return userLogin[0]
}