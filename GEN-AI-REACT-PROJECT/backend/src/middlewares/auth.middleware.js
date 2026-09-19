const jwt = require("jsonwebtoken")
const tokenBlackListModel= require("../models/blacklist.model")



async function authUser(req,res,next){

    const token = req.cookies.token

    if(!token){
        return re.status(401).json({
            message:"Token not provided"
        })
    }

    const isTokenBlackListed=await tokenBlackListModel.findOne({
        token
    })

    if(isTokenBlackListed){
        return res.status(401).json({
            message:"Token is blacklisted . please login again"
        })
    }


    try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded

        next()

    } catch (err){
        return res.status(401)({
            message :"Invalid token "
        })
    }
   
}

module.exports={
    authUser
}