const express= require("express")
const app =express();
// declaring Ports and Url for connection 
require('dotenv').config();
const port=process.env.PORT || 4000
app.use(express.json());
require("./config/db").connect()
// making routes And mounting the apis 
const user = require("./routes/user.js")
app.use("api/v1",user)
//activation 
app.listen(3000,(req,res)=>{
    res.send ("aranav mahalpure")
})
