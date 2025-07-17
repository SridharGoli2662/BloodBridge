import express from "express"
import mongoose from "mongoose";
import UserRoutes from "./routes/UserRoutes.js";
import cors from "cors"
import RequestRoute from "./routes/RequestRoute.js";
const app=express();
//data base connection
const ConnectionString="mongodb+srv://SridharGoli:Sridhar%402662@blooddonationapplicatio.fzylsaw.mongodb.net/BloodDonation";
// const dbObject=await MongoClient.connect(ConnectionString);
// const db=dbObject.db('BloodApp')
// const coll=db.collection("Users")
// coll.insertOne(data)
//using moongose
app.use(cors())
app.use(express.json())
app.get("/",(req,res,next)=>{
    res.send("this is main page")
})
const database=mongoose.connect(ConnectionString)
app.use('/',UserRoutes);
app.use('/',RequestRoute);
database.then(()=>{
    console.log("databased connected sucessfully")
    app.listen(4000,()=>{
        console.log("server started")
    })
}).catch((err)=>{
    console.log(err)
})