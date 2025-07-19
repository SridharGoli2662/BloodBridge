import express from "express"
import mongoose from "mongoose";
import UserRoutes from "./routes/UserRoutes.js";
import cors from "cors"
import RequestRoute from "./routes/RequestRoute.js";
import cookieParser from "cookie-parser";
const app=express();
//data base connection
const ConnectionString="mongodb+srv://SridharGoli:Sridhar2662@blooddonationapplicatio.fzylsaw.mongodb.net/BloodDonation";
// const dbObject=await MongoClient.connect(ConnectionString);
// const db=dbObject.db('BloodApp')
// const coll=db.collection("Users")
// coll.insertOne(data)
//using moongose
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())
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