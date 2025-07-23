import axios from "axios";
import { ErrorMessage, useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Navbar from "../Components/Navbar";
export default function Login() {
  //connecting to server
  const [formdata, setformdata] = useState();
  // useEffect(async()=>{
  //    const response=await axios.post("user/login",formdata)
  // },[])
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: async (values) => {
      // setformdata(values);
      // console.log(formdata)
      try {
        const response = await axios.post(
          "http://localhost:4000/user/login",
          values,
          { withCredentials: true }
        );
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    },
  });
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#FDDAD4", minHeight: "89.5vh" }}
        className="flex items-center justify-center py-12 mt-3"
      >
        <form
          style={{
            backgroundColor: "#fff",
            border: "1px solid #d1d5db",
            color: "#000",
          }}
          className="w-full max-w-md rounded-lg shadow-md p-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid gap-4 mb-2 md:grid-cols-1">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                placeholder="sample@gmail.com"
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                onChange={formik.handleChange}
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border rounded-md block mx-auto text-white border-gray-400 bg-red-500 p-2 hover:bg-red-800 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
