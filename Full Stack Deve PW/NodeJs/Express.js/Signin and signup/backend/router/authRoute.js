// creating instances
const express = require('express')
const authRouter = express.Router()
const {signup} = require('../controller/authController')

authRouter.post('/signup', signup )              // post: entity creating ,  secure data access

module.exports = authRouter