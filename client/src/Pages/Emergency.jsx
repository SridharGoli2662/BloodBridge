import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Emergency()
{
    useEffect(async()=>{
        const response= await axios.get('http://localhost:4000/request/6873c69b41a8f0a25c110416')
        console.log(response)
    },[])
    return(
        <>

                    <h1 className="text-2xl">Blood Request will Appear here</h1>
        </>
    )
}