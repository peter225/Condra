const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../../errors')
var userObject = {};

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
    //console.log(email)
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid email');
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token = user.createJWT()
    //userObject =    
    userObject = res.status(StatusCodes.OK).json({user:{ username:user.username,
                                            email:user.email,
                                            bio:user.bio,
                                            token:token,
                                            createdAt: user.createdAt,
                                            updatedAt: user.updatedAt
                                        }
                                    })
    
}

const getUser = async(req, res) => {
    try {
        console.log(userObject)
        if(Object.keys(userObject).length===0){
            res.status(403).json({msg:'unauthorized request'})
        }else{
            res.status(StatusCodes.OK).json(userObject)
        }
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
        //res.status(403).json({error})
    }
}

module.exports = {register, login,getUser}