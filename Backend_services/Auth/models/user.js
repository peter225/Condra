const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = mongoose.model('User', UserSchema)