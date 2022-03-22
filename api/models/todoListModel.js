'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClueSchema = new Schema({
    category:String,
    value:String,
    question:String,
    answer:String,
    round:String,
    show_number:Number,
    air_date:Date
}) ;

module.exports = mongoose.model('Clues', ClueSchema);