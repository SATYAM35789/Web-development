import mongoose from "mongoose";

const userschema = new mongoose.schema(
    {
         name: {
            type : String,
            required : [true,'Name is required'],
            maxLength: [50, "Name should be less than 50 characters "]
         }, 
         email:{
            type: string,
            unique : true
         },
         username :{
            type: String,
            unique : true
         },
         password : string,
         age:number
        
    }
)

//export
export default mongoose.model("User",userschema)
// 1. databasse kya Naam HOGa(usually naam ko plural mai sava karata hai jaise user ko users) 
// 2. schema kaisa hoga 