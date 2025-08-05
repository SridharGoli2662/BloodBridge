import mongoose from "mongoose";
const userdata = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Street: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
  BloodGroup: {
    type: String,
    // required:true,
  },
  Lname: {
    type: String,
    required: true,
  },
  Fname: {
    type: String,
    required: true,
  },
});
export default mongoose.model("userdata", userdata);
