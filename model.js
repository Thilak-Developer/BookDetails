const mongoose = require('mongoose');

const structure = mongoose.Schema({

    title:String,
    author:String,
    edition:Number,
    releasedOn:Number
});


module.exports = mongoose.model('bookdetails',structure)