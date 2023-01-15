const mongoose=require("mongoose")
const tokenSchema=new mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    },
    token:{
        type:"String",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:3600,
    }
})
const token=new mongoose.model("Token",tokenSchema)
module.exports=token;