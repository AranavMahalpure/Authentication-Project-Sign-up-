//defining Routes 
const express =require("express")
const route =express.Router()
const {login,signin}= require("../controller/auth")
//mapping 
route.post("/login",login)
route.post("/signin",signin)
//export the route 
module.export = route();
