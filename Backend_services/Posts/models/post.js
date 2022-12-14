const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Post', PostSchema)