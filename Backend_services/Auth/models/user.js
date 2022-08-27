const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv')

const UserSchema = new mongoose.Schema({
    username: {
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
    bio: {
        type:String ,
        maxlength:[500,'name cannot be more than 50 characters'],
        trim:true
    },
    password: {
        type:String,
        required:[true,'please provide password'],
        minlength: 6
    },
    
},{ timestamps: true })
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.createJWT = function (){
    return jwt.sign({userId: this._id, name: this.name},
        process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_LIFETIME
        }
    )
}

UserSchema.methods.comparePassword = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)