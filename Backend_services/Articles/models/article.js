const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    name: {
        type:String,
        maxlength:[20,'name cannot be more than 20 characters'],
        required:[true,'must provide name'], 
        trim:true
    },
    password: {
        type:String,
        default: false
    }
})

module.exports = mongoose.model('Article', ArticleSchema)