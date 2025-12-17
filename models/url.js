const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longurl:{
        type:String,
        required: true,
    },
    shortcode:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("url",urlSchema)