import jwt from "jsonwebtoken"
import userdata from "../model/Signup.js"
export default async function Auth(req,res,next)
{   
    try
    {
        const {cookiename}= req.cookies;
        console.log(cookiename)
        if(cookiename===undefined)
        {
             req.userInfo=true;
        throw new Error("Login Details Are Not Found")
        }
    // if(Object.keys(req.cookies).length === 0)
    // {
    //     // console.log("cookies lev mava")
    //     //user should navi
    //     // gate to login/signup page
    //     req.userInfo=true;
    //     // throw new Error("Login Details Are Not Found")
    //     next()
    // }
    // console.log("code comming here")
    req.userInfo=false;
    // console.log(req.cookies)
        // const{cookiename}=req.cookies;
        // console.log(cookiename)
    //this cookiename consists jwt token by using that token we need to get userdata present inside jwt token
        const {Email}= jwt.verify(cookiename,"BloodApp")
    //by using user email we need to find user document_id 
        const currentUserDeatils=await userdata.findOne({Email:Email})
        // console.log(currentUserDeatils._id)
        req.Uid=currentUserDeatils._id
        next();
    }
    catch(err)
    {
        res.status(400).send(err.message)
    }
}