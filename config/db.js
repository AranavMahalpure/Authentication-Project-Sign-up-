const mongoose =require("mongoose")
require('dotenv').config()
exports.connect=()=> {
  mongoose.connect(process.env.dburl,{
     useNewUrlParser:true,
     useUnifiedTopology:true
  })
  .then(()=> {
       console.log("connection Successful");
  })
  .catch(( error)=>{
         console.log(error.message);
         process.exit(1)
  })
};