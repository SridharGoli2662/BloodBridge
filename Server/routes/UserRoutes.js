import express from "express";
import mongoose from "mongoose";
import userdata from "../model/Signup.js"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import UserRequest from "../model/UserRequest.js";
import ActiveRequest from "../model/ActiveRequest.js";
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
      console.log(isCorrectPassword)
      if(!isCorrectPassword)
        {
          throw new Error("Invaid Password!...")
        }
      //creation of jwt token
    const token=jwt.sign({Email:Email},"BloodApp")
    //setting cookie
     res.cookie("cookiename",token)
    res.send("cookie set sucess")
    }catch(err)
    {
        res.status(404).send(err.message);
    }
})
UserRoutes.post("/user/signup",async(req,res,next)=>{
    try{
        //getting password from userdata
        const{Password}=req.body;
        //using bcrypt hash the password
        const crypted=await bcrypt.hash(Password,10);
        req.body.Password=crypted;
        const newdb=new userdata(req.body)
        await newdb.save();  
        res.send("data inserted into database!....")  
    }catch(err)
    {
        res.status(404).send(err.message)
    }
        
    //insert data into schema
    //use save method to insert data

})
UserRoutes.post("/user/request",async(req,res,next)=>{
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
export default UserRoutes;
