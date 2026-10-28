const express = require('express')
const app = express(); //  instance/object of express
const authRouter = require('./router/authrouter')
const databaseconnect = require('./config/databaseconnection')
const cookieParser = require('cookie-parser')
const cors = require('cors')

databaseconnect();
app.use(express.json());
app.use(cookieParser()) 
// 3rd party ko access karne mai access karega:- 
app.use(cors({
    origin:[process.env.CLIENT__URL],
    credentials : true
}))        

app.use('/api/auth/', authRouter)

app.use( '/', (req,res)=>{
    res.status(200).json({ data: 'JWTauth server '})
})

module.exports = app;