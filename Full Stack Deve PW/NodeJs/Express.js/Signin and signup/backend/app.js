// Creating server
const express = require('express')
const app = express()
const authRouter = require('./router/authRoute')
const databaseconnect = require('./cinfig/databaseConfig')

databaseconnect()

app.use(express.json())  // data parse ke through server ko pata ho ki kon sa data aa raha hai

app.use('/api/auth/', authRouter)

app.use('/',(req, res)=>{
    res.status(200).json({ data : ' JWTauth server updated' })
})

module.exports = app