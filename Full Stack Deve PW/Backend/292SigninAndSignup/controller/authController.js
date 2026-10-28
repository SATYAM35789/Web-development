const userModel = require("../model/userSchema")
const emailValidator = require("email-validator")
const bcrypt = require('bcrypt')


const signup = async(req, res, next)=>{
    const { name,email, password, confirmpassword } = req.body
    console.log(name,email, password, confirmpassword )

    if(!name || !email ||  !password ||!confirmpassword){
      res.status(400).json({
        success : false,
        message : " Every field is required."
      })
    }

    const validEmail = emailValidator.validate(email)
    if(!validEmail){
      res.status(400).json({
        success : false,
        message : " Please provide a valid email id"
      })
    }

    if(password != confirmpassword){
      res.status(400).json({
        success : false,
        message : " Password donot match"
      })
    }

    try{
       const userInfo = userModel(req.body);
       const result = await userInfo.save()
       return res.status(200).json({
         success : true,
         data : result
        });

    } 
    catch(e){
       return res.status(400).json({
        success : false,
        message : e.message
       })
    }  
}

const signin = async(req, res)=>{
   const{email,password} = req.body;

   if(!email || !password){
      res.status(400).json({
        success : false,
        message : " Every field is required."
      })
   }

   const user = await userModel
       .findOne({
        email
       })
       .select('+password');

      // agar user bhi nahi aur password bhi galat hai
       if(!user|| !(await bcrypt.compare(password,user.password)) ){
         res.status(400).json({
            success : false,
            message : "Invalid credentials"
          })
        }

      try{
             // Generate Tokens 
             const token = user.jwtToken()
             user.password = undefined  // leak na

             const cookieOption = {
                maxAge : 24*60*60*1000,
                httpOnly : true   // client side se no access
              }

              res.cookie("token",token,cookieOption)
               res.status(200).json({
                  success:true,
                  data: user
               })
      }
      catch(e){
            res.status(400).json({
                  success: false,
                  message: e.message
            })
      } 

}

const getUser = async( req, res, next)=>{
    const userId = req.user.id;
     try{
        const user = await userModel.findById(userId);
        return res.status(200).json({
          success : true,
          data: user
        });
     }
     catch(e){
         return res.status(400).json({
          success : false,
          message : e.message
         })
     }
}

const logout = (req,res)=>{
  try{
    const cookieOption = {
      expires: new Date(),
      httpOnly: true
    };
    res.cookie("token",null,cookieOption)
    res.status(200).json({
      success: true,
      message : "You logged out"
    })
  }
  catch(e){
     res.status(400).json({
      success: false , 
      message : e.message
     })
  }
}
module.exports = {
    signup,
    signin,
    getUser,
    logout
}