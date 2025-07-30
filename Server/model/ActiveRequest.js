import mongoose from "mongoose";
const ActiveRequest=new mongoose.Schema({
    requestDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    // dfghjk
    matchingUsers:{
        type:Array,
        required:true
    },
    requestStatus:{
        type:Boolean,
        required:true
    }
},{timestamps:true})
export default mongoose.model("ActiveRequest",ActiveRequest)