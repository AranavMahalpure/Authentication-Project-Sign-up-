const bcrypt= require("bcrypt")
const user = require("../module/user");
//sign up route handler 
exports.signup = async(req,res)=>{
    try{ // get the data 
        const{name,email,password,role} = req.body;
        const exitingUser = await User.findOne({ email});
        if (exitingUser){
             return res.status(400).json({
                success:false,
                message : "user already Exit"
              } )
        }
        //secure password 
        let hashedPassword
        try {
            hashpassword =await bcrypt.hash(password,10)
        }
        
        catch(error){ 
   return res.status(500).json({
    success:false,
    message: "error in hashing "

   })
   
  
        }
        // create entry for user  
     const user = await user.create({
        name ,email,password:hashedPassword,role
   })
  return res.status(200).json({
    success:false,
    message:"user created Successfully"
  })
    }
    catch(error){ 
        return res.status(500).json({
         success:false,
         message: "user can not register now "
     
        })

}}
