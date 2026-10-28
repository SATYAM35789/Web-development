const { json } = require('express')
const User = require('../models/userModel.js')
exports.home = (req, res)=>{
    res.send('Hello World!')
}

// sending data in a database
exports.createUser = async(req, res) => {
    // extract info 
    try{
        // destructuring in js
        const {name, email} = req.body   // aapke pass naam aur email aa gaye
          
         if(!name || email){
           throw new Error("Name and email are required")
         }
        const userExists = user.findone({email})
        if( userExists){
          throw new Error("User already exists")
        }

       const user = await User.create({
         name: name, 
         email : email
       })

       res.status(202).json({
         success : true,
         message : "User created successfully",
         user
       })

    }
    catch(error){
         console.log(error);
         res.status(400).json({
            success : false,
            message : error.message
            
         })
         
    }
}

// User receive
exports.getUsers = async(req,res)=>{
  try{

      const users = await User.find({})    // awaits = dure continent mai
      if(!users){}
      res.status(200).json({
        success : true,
        users
      })
  }
  catch(error){
         console.log(error);
         res.status(400).json({
            success : false,
            message : error.message,
            
         })
         
    }
}

// Deleting
exports.deleteUser = async(req, res) => {
  try{
       // 1st Taking data from user  two ways 1. URL  2. req.body
       // Taking data from url
       const userId = req.params.id
       const user=await User.findByIdAndDelete(userId)
       res.status(200).json({
        success : true,
        message : "User deleted successfully"
       })

  }
  catch(error){
         console.log(error);
         res.status(400).json({
            success : false,
            message : error.message,
         })
    }
  
}

// Update user
exports.updateUser = async(req, res)=>{
  try{
       const user = await User.findByIdAndUpdate(req.params.id, req.body)  // (kya update, kaha se )
       res.status(200).json({
        success : true,
        message : "User updated successfully"
       })
  }
  catch(error){
         console.log(error);
         res.status(400).json({
            success : false,
            message : error.message,
          })
  }

}