const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config()
const fileUpload=require("express-fileupload")

const app=express()
app.use(cors({
    origin:'*',}
))
app.use(fileUpload( {useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.use(express.json())
const User=require("./model/user")
const bcrypt=require("bcrypt")
const { findOne } = require("./model/user");
const server=process.env.PORT||5000;
const router=require("./routes/userRoutes")

mongoose.connect(process.env.MONGO_URL,()=>{
    useNewUrlParser=true,
    useUnifiedTopology=true
})
.then(

    console.log("mongoose is connected"))
.catch(error=>console.log(error))

app.get("/make",(req,res)=>{
    console.log(req.body);

})


app.use("/api/auth",router)
app.get("/",(req,res)=>{
    res.status(200).send("hi")
})
app.listen(server,(req,res)=>{
    console.log(`server is running on the port ${server}`)
})

