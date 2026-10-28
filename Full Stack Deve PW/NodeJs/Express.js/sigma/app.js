 require('dotenv').config()
 const express = require('express')
 const cors = require('cors') // different url ko aapas mai baat karne ke liye use karte hai
//import express from "express";   module enable karna hoga 

const connectToDb = require('./config/db.js')

const app = express();

//Express middleware : request se pahle execute hota hai ,  data send karna database mai
app.use(express.json())   // json ko  accept karo
app.use(express.urlencoded({extended : true}))   // url ke through aaye toh accept kar lo

app.use(cors())

// init connection to db
connectToDb()

// Creating route

// import routers
const userRoutes = require('./routes/userRoutes.js')

app.use('/' , userRoutes)

//export default app;
module.exports = app 