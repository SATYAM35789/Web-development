import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary"
import fs from 'fs/promises'
import sendEmail from "../utils/sendEmail.js";
import crypto from 'crypto'

const cookieOptions = {
    maxAge: 7*24*60*60*10000,  //7days
    httpOnly : true, 
    secure : true    
}

const register = async(req, res,next)=>{
    const { fullName, email, password} = req.body;

    if(!fullName|| !email|| !password){
        return next(new AppError('All fileds are required', 400))
    }

    const userExixts = await User.findOne({email})

    if(userExixts){
        return next(new AppError('Email already exists', 400))
    }
    
    const user = await User.create({
        fullName,
        email,
        password, // rowform mai data hai
        avatar: {
            public_id : email,
            secure_url : 'https://unsplash.com/s/photos/image'
        }
    })

    if(!user){
        return next(new AppError('User registration failed, please try again', 400))
    }

    // Todo : File upload
    if(req.file){
        console.log(req.file);
        
        try{
            const result = await cloudinary.v2.uploader(req.file.path, {
                folder :'lms',
                width: 250,   // px
                height : 250,
                gravity : 'faces',   //focus face
                crop: 'fill'
            })

            if(result){
                user.avatar.public_id = result.public_id
                user.avatar.secure_url = result.secure_url

                // Removing file from server
                fs.rm(`uploads/${req.file.filename}`)
            }
        }
        catch(e){
            return next(
                new AppError( error ||'File not uploaded please try again. ' , 500)
            )
        }
    }

    await user.save()

    user.password = undefined;

    // Login
    const token = await user.generateJWTToken();

    //Save token in cookies
    res.cookie('token',token,cookieOptions)

    res.status(201).json({
        success: true,
        message: 'user registered successfully',
        user,
    })
}

const login = async(req, res,next)=>{
try{

    const {email, password} = req.body;

    if(!email || !password){
        return next(new AppError('All fields are required', 400))
    }

    const user = await User.findOne({
        email
    }).select('+password')

    if(!user || !user.comparePassword(password)){
        return next(new AppError('Email or password does not match', 400))
    }

    const token = user.generateJWTToken()

    user.password = undefined;

    res.cookie('token', token, cookieOptions)

    res.status(200).json({
        success : true,
        message: 'User successfully logged in',
        user,   // sending user info as it is. 
    })
}
catch(e){
     return next(new AppError(e.message, 500))
}


}
const logout = (req, res)=>{
    res.cookie('token', null, { 
        secure: true, 
        maxAge : 0 ,
        httpOnly : true
    })

    res.status(200).json({
        success: true,
        message : 'User logged out successfully'
    })
}
const getProfile = async(req, res)=>{
    try{
        const userId = req.user.id 
        const user = await User.findById(userId)

        res.status(200).json({
            success:true,
            message : "User Details",
            user
        })

    }
    catch(e){
          return next(new AppError('Failed to fetch the Profile details',500))
    }
}


const forgotPassword = async (req,res,next) =>{
     const {email} = req.body;

     if(!email){
        return next(new AppError('Email is required', 400))
     }
    
     const user = await User.findOne({email})
     if(!user){
        return(new AppError('Email not registered', 400))
     }

     const resetToken = await user.generatePasswordResetToken();

     await user.save()

     const resetPasswordURL = `${process.env.FRONTED_URL}/reset-password/${resetToken}`

     console.log(resetPasswordURL); // Kyuki hum abhi toh nahi bhej rahe email par so Terminal link 
     
     const subject = 'Reset Password' 
     const message = `You can reset your password by clicking <a href = ${resetPasswordURL} target = "_blank"> Reset your password</a>\n `

     try{
        await sendEmail(email, subject, message)

        res.status(200).json({
             success : true,
             message : `Reset password token has been sent to ${email} successfully`
        })
     } catch(e){
        user.forgotPasswordToken = undefined
        user.forgotPasswordExpairy = undefined

        await user.save()

        return next(new AppError(e.message, 500))
     }

}

const resetPassword = async (req,res) =>{
    const {resetToken} = req.params

    const{password}= req.body   // new password

    const forgotPasswordToken = crypto
       .createHash('sha256')
       .update(resetToken)
       .digest('hex')
    
    const user = await User.findOne({
        forgotPasswordToken,
        forgotPasswordExpairy : {$gt:Date.now()}
    })

    if(!user){
        return next( new AppError('Token is invalid or expaired, please try again', 400))
    }
    user.password = password
    user.forgotPasswordToken = undefined
    user.forgotPasswordExpairy = undefined

    user.save()

    res.status(200).json({
        success : true,
        message : "Password changed successfully!"
    })

}

const changePassword = async (req, res) => {
    const {oldPassword, newPassword } = req.body
    const {id} = req.user

    if(!oldPassword || !newPassword){
        return next(new AppError("All fields are required",400))
    }

    const user = await User.findById(id).select('+password')

    if(!user){
        return next(new AppError("User Does not exist",400))
    }

    const isPasswordValid = await user.comparePassword(oldPassword)

    if(!isPasswordValid){
        return next(new AppError("Invalid old password",400))
    }

    user.password = newPassword;

    await user.save();

    user.password = undefined

    res.status(200).json({
        sucess : true,
        message : " Password changed successfully"
    })
}

const updateUser = async (req,res)=> {
    const { fullName} = req.body
    const { id } = req.user.id

    const user = await User.findById(id)

    if(!user){
        return next(new AppError('User does not exist',400))
    }
    
    if(req.fullName){
        user.fullName = fullName
    }

    if(req.file){
        await cloudinary.v2.uploader(user.avatar.public_id)

        try{
            const result = await cloudinary.v2.uploader(req.file.path, {
                folder :'lms',
                width: 250,   // px
                height : 250,
                gravity : 'faces',   //focus face
                crop: 'fill'
            })

            if(result){
                user.avatar.public_id = result.public_id
                user.avatar.secure_url = result.secure_url

                // Removing file from server
                fs.rm(`uploads/${req.file.filename}`)
            }
        }
        catch(e){
            return next(
                new AppError( error ||'File not uploaded please try again. ' , 500)
            )
        }
    }
    await user.save();

    res.status(200).json({
        success : true,
        message : 'User details  updated successfully'
    })
}
export{
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword,
    changePassword,
    updateUser
}