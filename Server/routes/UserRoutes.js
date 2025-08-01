import express from "express";
import mongoose from "mongoose";
import userdata from "../model/Signup.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import UserRequest from "../model/UserRequest.js";
import ActiveRequest from "../model/ActiveRequest.js";
import Auth from "../middleware/Authentication.js";
const UserRoutes=express.Router();
UserRoutes.post("/user/login",async(req,res,next)=>{
    //res.send("this is login api")
    try{
      const{Email,Password}=req.body;
      const userexist=await userdata.findOne({Email:Email});
    //checking either the password is correct
    if(userexist===null)
      {
        throw new Error("No user Found!!")
      }
      const isCorrectPassword=await bcrypt.compare(Password,userexist.Password);
      if(!isCorrectPassword)
        {
          throw new Error("Invaid Password!...")
        }
      //creation of jwt token
    const token=jwt.sign({Email:Email},"BloodApp")
    //setting cookie
     res.cookie("cookiename",token,{path:'/'})
    //  console.log(req.cookies)
    res.status(200).send("Login Sucess......")
    }catch(err)
    {
        res.status(400).send(err.message);
        // res.send(err.message)
    }
})
UserRoutes.post("/user/signup",async(req,res,next)=>{
    try{
      //ensure  email and mobileNum Should be Unique
        const duplicateUser=await userdata.findOne({Email:req.body.Email}) 
      if(duplicateUser)
      {
          throw new Error("User Already Exists")
      }
        //getting password from userdata
        const{Password}=req.body;
        //using bcrypt hash the password
        const crypted=await bcrypt.hash(Password,10);
        req.body.Password=crypted;
        const newdb=new userdata(req.body)
        await newdb.save(); 
        res.send("UserSignUp Sucess.....")
    }catch(err)
    {
        res.status(404).send(err.message)
    }
        
    //insert data into schema
    //use save method to insert data

})
UserRoutes.post("/user/request",Auth,async(req,res,next)=>{
  // console.log(req.body)
  try{
     //getting all the donars list to send notification
     const donarlist=await userdata.find({City:req.body.HospitalCity})
     console.log(donarlist)
     //generating a request 
     const data= new UserRequest(req.body)
     data.save();
     //storing request data and related  donars list into ActiveRequest Schema
     console.log(data._id)
     const requestStatus=new ActiveRequest({
      matchingUsers:donarlist,
      requestDetails:data._id,
      requestStatus:'false'
     })
     requestStatus.save();
    res.send("Request Raised Sucess...!!")
  }catch(err)
  {
      res.status(404).send(err.message)
  }
})
UserRoutes.get('/user/request',Auth,(req,res)=>{
    res.send(req.userInfo)
})
UserRoutes.get('/user/logout',(req,res,next)=>{
    //clear cookies
    res.clearCookie('cookiename')
    //send respose as logged out]
    res.status(200).send("user loged out sucess")
})
export default UserRoutes;
