import axios from "axios";
import {ErrorMessage,useFormik} from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
export default function Login() {
  //connecting to server
  const [formdata,setformdata]=useState();
  // useEffect(async()=>{
  //    const response=await axios.post("user/login",formdata)
  // },[])
    const formik=useFormik(
        {
            initialValues:{
              Email:'',
              Password:''
            }, 
            onSubmit:async(values)=>{
                // setformdata(values);
                // console.log(formdata)
                try{
                  const response=await axios.post("http://localhost:4000/user/login",values)
                  console.log(response)
                }catch(err)
                {
                  console.log(err.message)
                }
            }
        }
    )
  return (
    <>
      <div>
        <form

          style={{
            backgroundColor: "#f2f2f2",
            width: "50%",
            margin: "20px auto",
          }}
          onSubmit={formik.handleSubmit}
        >
          <div className="p-3 grid gap-4 mb-2 md:grid-cols-1">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sample@gmail.com"
                onChange={formik.handleChange}
              ></input>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="text"
                id="Password"
                name="Password"
                onChange={formik.handleChange}
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
            <div>
              <button type="submit" className="border rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
