const userModel = require("../model/userSchema");

const signup = async(req,res , next)=>{
    const { name , email, password,  confirmPassword} = req.body
    console.log(name, email, password, confirmPassword);
    
    try{
        // Creating model instance to store the data in database
        const userInfo = userModel(req.body)  // directly using req.body beccause having same data json
         // Directly storing data with mongoose
        const result = await userInfo.save()
        
        return res.status(200).json({
        success : true,
        data : result
      })
    }
    catch(e){
        //  If data not save  , 11000 used for duplication
        if(e.code == 11000){
          return res.status(400).json({
          success : false,
          message : 'Account already exists with provided email id'
        })
        }
        return res.status(400).json({
          success : false,
          message : e.message
        })
    }
  
}

module.exports = {
    signup
}