import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Emergency()
{
    useEffect(()=>{
        async function fetchdata() {
            const response= await axios.get('http://localhost:4000/request',{withCredentials:true})
            console.log(response)
        }
        fetchdata()
    },[])
    return(
        <>

                    <h1 className="text-2xl">Blood Request will Appear here</h1>
        </>
    )
}