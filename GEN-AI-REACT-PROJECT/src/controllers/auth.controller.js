const userModel = require("../models/user.model")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")



/**
 * @name register user controller 
 * @description register a new user take , username ,pswrd,email and all are required 
 * @access public
 */
 
async function registerUserController(req,res){

const {username,email,password}=req.body

     if(!username || !email || password){
        return res.status(400).json({
            message :"please provide username,email and pswrd"
        })
     }

     const isUserAlreadyExist= await userModel.findOne({
        $or : [{username},{email}]
     })

     if (isUserAlreadyExist){
        /* isUernameAllready exist to check is he allready exist */
        return res.status(400).json({
            message : "Account allready exist with this mail or username"
        })
     }

     const hash = await bcrypt.hash(password,10)

     const user = await userModel.create({
        username,
        email,
        password:hash
     })

     const token = jwt.sign(
        {id:user._id , username:user.username},
        process.env.JWT_SECRET,
        {expiresIn :"1d"}
     )

     res.cookie("token",token)

     res.status(201).json({
        message :"user registered succesfully",
        user:{
            id :user._id,
            username : user.username,
            email:user.email
        }
     })





}


/**
 * @name  login user controller 
 * @description login a user via taking info of mail and pswrd
 * @access public
 */

async function loginUserController(req,res){
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message : " invalid username or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid){
        return res.status(400).json({
            message : " invalid username or password "
        })
    }

    const token = jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)
    res.status(200).json({
        message : "user loged in succesfully",
        user:{
            id:user._id,
            username:user.username,
            email: user.email
        }
    })

}






module.exports ={
    registerUserController,
    loginUserController
}