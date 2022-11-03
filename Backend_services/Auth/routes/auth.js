const express = require('express')

const router = express.Router()

const {login, register,getUser } = require('../controllers/auth')
const authorizeUser = require('../../middleware/authentication')

router.post('/register', register)
router.post('/login', login)
router.get('/user',authorizeUser, getUser)

module.exports = router