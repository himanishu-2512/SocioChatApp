const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        min: 3,
        max: 40,
        default: null,
        required: true,
    },
    username: {
        type: String,
        min: 5,
        max: 45,
        default: null,
        required: true,
    },
    email: {
        type: String,
        min: 3,
        max: 45,
        default: null,
        required: true,

    },
    password: {
        type: String,
        min: 8,
        default: null,
        required: true,
    },
    isAvatar: {
        type: Boolean,
        default: false,
    },
    avatarUrl: {
        type: String,

    },
    friends:[
      {  user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",}
        ,}
    ]
    ,
    posts:[{
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        }}
    ],
    isVerified:{
        type:Boolean,
        default:false,

    }

})
const User =new mongoose.model("User", userSchema)
module.exports=User