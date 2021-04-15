const userControllers = require('../controllers/userControllers')
const express = require('express')

const userRouters = express.Router()

userRouters.post('/', userControllers.createUser)
userRouters.post('/login', userControllers.userLogin)
userRouters.post('/:userId/addReview', userControllers.createReview)
userRouters.post('/getUser', userControllers.findUser)

module.exports = userRouters