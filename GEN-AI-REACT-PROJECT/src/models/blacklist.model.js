const mongoose=require("mongoose")


const blackListTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        require:[true, "token is required to aded in blacklisting"]
    }
    },{
        timestamps:true
   
})

const tokenBlackListModel= mongoose.model("blackListToken",blackListTokenSchema)

module.exports=tokenBlackListModel