import AppError from "../utils/error.util.js"
import jwt from 'jsonwebtoken'

const isLoggedIn =async (req,res,next)=>{
    const {token} = req.cookies

    if(!token){
        return next(new AppError('Unathunticated, please login again',400))
    }
    const userDetails = await jwt.verify(token,process.env.JWE_SECRET)

    req.user = userDetails

    next()

}

const authorizedRoles = (...roles) => async (req,res,next)=>{
    const currentUserRole = req.user.roles
    if(!roles.includes(currentUserRole)){
        return next(new AppError('You donot have a permission to access this', 403))
    }
    next()
}

const authorizedSubscriber = async(req,res,next) =>{
    // const subscription = req.user.subscription;
    // const currentUserRole = req.user.roles
    const user = await user.findById(req.user.id) 

    if(user.roles !== 'Admin' && user.subscription.status !== 'active'){
        return next(new AppError('Pleases subscribe to access this route.',403))
    }
    next()
}
 
export{
    isLoggedIn,
    authorizedRoles,
    authorizedSubscriber
}