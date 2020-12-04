const { read } = require('../../../nodejs_demo/db.js');
var userdb = require('../moogodb/userdb.js')
var gamedb = require('../moogodb/gamedb')
var userLogin = []
var errorSignUp = {email: '',username: '',password: ''}
var errorLogin;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.ApiListUser = async function(req,res){
    var listUsers = await userdb.find()
    res.json(listUsers)
}

module.exports.AddUser = async function(req,res){
    var listUser = await userdb.find() 
    var checkError = 0
    var idStringTmp = makeid(15)

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
        while(true){
            if((await userdb.find({idString: idStringTmp})).length !== 0){
                idStringTmp = makeid(15)
            }
            else{
                break;
            }
            
        }
        var userTmp = [{
            "name": req.body.name,
            "email": req.body.email,
            "username": req.body.username,
            "password": req.body.password,
            "idString": idStringTmp
        }]
        userdb.insertMany(userTmp)
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
        res.cookie('userMail',userLogin[0].email,{
            signed: true,
            expires: new Date(Date.now() + 900000)
        })
        res.cookie('_locale_id_xd',userLogin[0].idString,{
            httpOnly: true,
            signed: true,
            expires: new Date(Date.now() + 900000)
        })
        res.cookie('_uuXD',userLogin[0]._id,{
            signed: true,
            expires: new Date(Date.now() + 900000)
        })
        res.cookie('_sg_bm','831171891012155',{
            expires: new Date(Date.now() + 900000)
        })
        errorLogin = ''
        res.redirect('http://localhost:3000')
    }
}

module.exports.postComment = async function(req,res){
    userLogin = await userdb.find({email: req.signedCookies.userMail, idString: req.signedCookies._locale_id_xd})
    if(userLogin.length === 0){
        res.cookie('_sg_bm',makeid(20),{
            expires: new Date(Date.now() + 900000)
        })
        res.redirect('http://localhost:3000')
        return
    }
    game = await gamedb.find({name: req.body.nameGame})
    game[0].comment.push({
        "commenter": userLogin[0].name,
        "contentComment": req.body.content
    })
    await gamedb.remove({name: req.body.nameGame})
    await gamedb.insertMany(game)
    res.redirect('http://localhost:3000/games/'+game[0].namePage)
}

module.exports.signOut = async function(req,res){
    userLogin = []
    res.cookie('_sg_bm',makeid(20),{
        expires: new Date(Date.now() + 900000)
    })
    res.redirect('http://localhost:3000')
}

module.exports.ApiLogin = async function(req,res){
    var fullName = ''
    if (userLogin.length !== 0){
        fullName = userLogin[0].name
    }
    res.json({name: fullName})
}