import express from 'express';
import ActiveRequest from '../model/ActiveRequest.js';
const RequestRoute=express.Router()
RequestRoute.get('/request/:id',async(req,res,next)=>{
    // console.log(req.params.id);
    //confiming if id is present in ActiveRequest Document
    const response=await ActiveRequest.find({matchingUser})
    console.log(response)
    res.send("this is request route")
})
export default RequestRoute
