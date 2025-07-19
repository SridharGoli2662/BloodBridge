import express from 'express';
import jwt from "jsonwebtoken"
import ActiveRequest from '../model/ActiveRequest.js';
import UserRequest from "../model/UserRequest.js"
import userdata from "../model/Signup.js"
const RequestRoute=express.Router()
RequestRoute.get('/request',async(req,res,next)=>{
    // console.log("this is middle ware bhai")
    // console.log(req.cookies)
    const{cookiename}=req.cookies;
//this cookiename consists jwt token by using that token we need to get userdata present inside jwt token
    const {Email}= jwt.verify(cookiename,"BloodApp")
//by using user email we need to find user document_id 
    const currentUserDeatils=await userdata.findOne({Email:Email})
    // console.log(currentUserDeatils._id)
    req.Uid=currentUserDeatils._id
    next();
},async(req,res,next)=>{
//getting all the active requests documents
    const response=await ActiveRequest.find()
    // console.log(response)
    //by using reponse array we are getting users details as a objects with the help of matched users array 
    response.map((x,index)=>{
        // console.log(x)
        x.matchingUsers.map(async(y)=>{
//checking whether the user is present in the comming userObjects 
            // console.log(y)
            // console.log(typeof(req.Uid))
            // console.log("this is req.uid"+ req.Uid)
            if(y._id.equals(req.Uid))
                {
                    // console.log(y._id)
//fetchig ActiveRequest document details(_id) by using ActiveRequest Document Id(x._id)
                const mu=await ActiveRequest.findOne({_id:x._id})
                // console.log(mu)
                // console.log(y._id)
                const pd=await UserRequest.find({_id:mu.requestDetails})
                console.log(pd)
            // console.log(y._id)
                }
                // else{
                    // console.log("mamaa if loki povatled")
                // }
        })
    })
    // console.log(req.params.id)
    res.send("this is request endpoint")
})
export default RequestRoute
