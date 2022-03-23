'use strict'
var     mongoose            = require('mongoose'),
        mongoosePaginate    = require('mongoose-paginate-v2'),
        Schema              = mongoose.Schema;

var ClueSchema = new Schema({
    category:String,
    value:String,
    question:String,
    answer:String,
    round:String,
    show_number:String,
    air_date:String
}) ;

ClueSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Clues', ClueSchema);