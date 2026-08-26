import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js"
import  Mongoose from "mongoose"

export const signUp= async (req,res)=>{
    try{
        const {fullName,email,password,mobile,role}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User allready exist"})
        }
        if(password.length<6){
            return res.status(400).json({message:"pswrd must be at leasst 6 digit"})
        }
        if(mobile.length<10){
            return res.status(400).json({message:"pswrd must be at leasst 10 digit"})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hashedPassword
        })

        const token = await genToken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(201).json(user)

    } catch (error){
        return res.status(500).json(`sign up error ${error}`)
    
        
    }
}


export const signIn= async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User doesn't exist"})
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message : "incorrect password"})
        }
    

        const token = await genToken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(201).json(user)

    } catch (error){
        return res.status(500).json(`sign in error ${error}`)
    
        
    }
}


export const signOut=async (req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message : "log out succesfully"})
    } catch (error) {
        return res.status(500).json(`sign out error ${error} `)
    }
}


