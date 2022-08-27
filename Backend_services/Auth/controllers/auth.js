const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../../errors')


const register = async(req,res) => {
    

    const user = await User.create({...req.body})

    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({user:{username:user.username,
                                                email:user.email,
                                                bio:user.bio,
                                                token:token,
                                                createdAt: user.createdAt,
                                                updatedAt: user.updatedAt
                                                }})
}
const login = async(req,res) => {
    const { email, password } = req.body
    if(!email || !password){
        throw new BadRequestError('please enter email and password!')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user:{username:user.username}, token})

}

module.exports = {register, login}