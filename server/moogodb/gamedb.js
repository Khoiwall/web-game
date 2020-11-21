var mongoose = require('mongoose');
const { isInteger } = require('../../../nodejs_demo/db');

var GameSchema = new mongoose.Schema({
    name: String,
    namePage: String,
    imageBackGournd: String,
    imageBackgourndGames: String,
    imageOne: String,
    imageTwo: String,
    imageThree: String,
    detail: Object,
        date: String,
        update: String,
        version: String,
        developer: String,
        publish: String,
    updateUp:String,
    description: Object,
        numberOne: String,
        numberTwo: String,
        numberThree: String,
        numberFour: String,
        numberFive: String,
    minimum: Object,
        os: String,
        processor: String,
        memory: String,
        graphics: String,
        directX: String,
        storage: String,
    recommended: Object,
        os1: String,
        processor1: String,
        memory1: String,
        graphics1: String,
        directX1: String,
        storage1: String,
    category: Array,
    link: Object,
        googleDrive: String,

});

var game = mongoose.model('game', GameSchema, 'ListGame')

module.exports = game