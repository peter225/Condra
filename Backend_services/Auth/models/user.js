const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        maxlength:[50,'name cannot be more than 50 characters'],
        minlength:3,
        required:[true,'please provide name'], 
        trim:true
    },
    email: {
        type:String,
        required:[true,'please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true,
    },
    password: {
        type:String,
        required:[true,'please provide password'],
        minlength: 6
    }
})

module.exports = mongoose.model('User', UserSchema)