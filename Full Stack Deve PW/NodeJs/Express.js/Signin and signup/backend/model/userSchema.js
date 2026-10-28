const mongoose = require('mongoose')
const {Schema} = mongoose

// Schema Defined
const userSchema = new Schema({
     name: {
        type: String,
        // validation
        require:[true, "user name is required"],
        minLength: [5,"Nme must be atleast 5 char"],
        maxlength: [50, 'Name must be less than 50 character'],
        trim: true
     },
     email:{
        type: String,
        reqired:[true, 'user email is required'],
        unique : true,
        lowercase: true,
        unique : [true, 'already registered']

     },
     password:{
        type: String,
        select : false
     },
     forgotPasswordToken:{
        type: String,
     },
     forgotPasswordExpiryDate:{
        type:Date,
     }

},{
    timestamps: true
})

// Creating model
// mongoose.model ke help se jo collection hai user naam ka, us collection data userSchema ke form mai aayega(kaisa strucure rahega) 
const userModel = mongoose.model("user", userSchema)
module.exports = userModel


// Adding validation 1. React 2. Controllerpar request 3. Database mai store karne ja rahe ho