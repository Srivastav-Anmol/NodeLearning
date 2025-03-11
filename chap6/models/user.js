const mongoose=require("mongoose")
//Schema
const userSchema=new mongoose.Schema({
    firstName:{
        type:"String",
        required:true
    },
    lastName:{
        type:"String"
    },
    email:{
        type:"String",
        unique:true,
        required:true
    },
    jobTitle:{
        type:"String"
    },
    gender:{
        type:"String"
    }
})

//model creation
const User=mongoose.model("user",userSchema)

module.exports=User