const User = require('../Auth/models/user')

const jwt = require('jsonwebtoken')

const { UnauthenticatedError } = require('../errors')

//authentication middleware
const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Token')){
        throw new UnathenticatedError('Authentication middleware')
    }

    const token = authHeader.split(' ')[1]
    //console.log(token)
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //console.log(payload)
        req.user = payload

        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }
        
    
} 
module.exports = auth