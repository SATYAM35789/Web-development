const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://satyam18191819_db_user:jnNGxvT8J0j3wKrA@cluster0.uvxzhvd.mongodb.net/'

//method making for callinh mongoose
const databaseconnect = ()=>{
   mongoose
      .connect(MONGODB_URL)
      //connection ke baad humlo bata dena
      .then((conn)=> console.log(`connected to db:${conn.connection.host}`))   // is host se connect ho gaya hai
      // agar connection mai error ho
      .catch((err)=> console.log(err.message));
      
}

module.exports = databaseconnect;