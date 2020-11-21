var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,

});

var user = mongoose.model('user', userSchema, 'Users')

module.exports = user