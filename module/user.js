const mongoose =require("mongoose")
const userschema = mongoose.Schema({
     name :{
        type: String,
        required:true,
        trim:true
     },
     email :{
        type: String,
        required:true,
        trim:true
     },
     password :{
        type: String,
        required:true,
     },
     role:{
        type: String,
        enum: ["admin","student","none"]
     }
})
module.export =mongoose.model("user",userschema)