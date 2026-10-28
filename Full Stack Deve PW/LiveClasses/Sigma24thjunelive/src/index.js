import app from './app.js'
const port = 4001

// Database Connectivity or datamodeling 0r schema creation
import mongoose from 'mongoose'
// special case async ife immidiately invoke fun
(async()=>{
    try{
    // db connection
       await mongoose.connect('dbstring')
       console.log("DB connected successfully");

       // event error checking or express ke liye kiya hai
       app.on("error",(err)=>{
        console.log("Error",err);
        throw err

        const onListening = () =>{
            console.log(`listening on port ${port}`);
        }
        
        app.listen(port, onListening)
       })
       
    }
    catch(error){
       console.log("Error",error);
       throw error
    }
})()
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// Database Connectivity : ye durectly connect nahi hota problem de sakta hai 2 dusre continent mai hota hai 
