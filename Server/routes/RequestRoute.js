import express from 'express';

import ActiveRequest from '../model/ActiveRequest.js';
import UserRequest from "../model/UserRequest.js"
import Auth from '../middleware/Authentication.js';
const RequestRoute=express.Router()
RequestRoute.get('/request',Auth,async(req,res,next)=>{
//getting all the active requests documents
    const response=await ActiveRequest.find()
//by using reponse array we are getting users details as a objects with the help of matched users array 
    response.map((x,index)=>{
        x.matchingUsers.map(async(y)=>{
//checking whether the user is present in the comming userObjects 
            if(y._id.equals(req.Uid))
                {
//fetchig ActiveRequest document details(_id) by using ActiveRequest Document Id(x._id)
                const mu=await ActiveRequest.findOne({_id:x._id})
               
                const pd=await UserRequest.find({_id:mu.requestDetails})
                console.log(pd)
                }   
        })
    })
    res.send("this is request endpoint")
})
export default RequestRoute