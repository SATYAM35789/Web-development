const mongoose = require("mongoose")

const ConnectToDb = async()=>{
    //Try Catch
    mongoose.connect(process.env.MONGO_URL)
    .then((connection)=>{
        console.log(`Connected to database:${connection.connection.host}`);
        
    })
    .catch((err)=>{
         console.log(err.message);
         // Database se connect nahi toh kaam nahi karna hai
         process.exit(1)
         
    })
}

module.exports = ConnectToDb