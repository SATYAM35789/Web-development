const JWT = require('jsonwebtoken')

const jwtAuth = (req,res,next)=>{
    const token = (req.cookies && req.cookies.token) || null
    if(!token){
        return res.status(400).json({
            success : false,
            message : 'token does not exist'
        })
    }
    try{
        const payload = JWT.verify(token, process.env.SECRET)
        req.user = {id:payload.id, email:payload.email};
    }
    catch(e){
        return res.status(400).json({
            success : false,
            message: 'token expired '
        })
    }
   next();   // imp to move one process to another at a time ex jwtAuth to userInfo in authrouter.js
}

 module.exports = jwtAuth;