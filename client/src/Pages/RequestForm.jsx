import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
export default function RequestForm() {
  const [formdata,setdata]=useState();
  // useEffect(async()=>{
  //   const resp=await axios.get("user/request")
  //   console.log(resp)
  // })
  const formik=useFormik({
    initialValues:{
      Gender:'',
      Page:'',
      Pname:'',
      HospitalState:'',
      Landmark:'',
      HospitalCity:'',
      HospitalName:'',
      RequirementUrgency:'',
      DiseaseSufferingFrom:'',
      RequiredBloodGroup:'',
      AlternateMobile:'',
      AttenderMobile:'',
      Pincode:''
    },
    onSubmit:async(values)=>{
      try{ 
        const res=await axios.post("http://localhost:4000/user/request",values)
        console.log(res)
      }catch(err)
      {
        console.log(err)
      }
    }
  })
  
  return (
    <>
      <div>
        <fieldset>
          <form
            style={{
              backgroundColor: "#f2f2f2",
              width: "50%",
              margin: "20px auto",
              borderRadius: "5px",
            }}
            onSubmit={formik.handleSubmit}
          >
            <div className="p-3">
              <legend>PatientDetails:</legend>

              <div
                id="patientDetails"
                className="border border-black rounded-lg p-4"
              >
                <div className=" grid gap-4 mb-2 md:grid-cols-2">
                  <div>
                    <lable htmlFor='Pname' className="block mb-2 text-sm font-medium text-gray-900">
                      PatientName
                    </lable>
                    <input onChange={formik.handleChange}
                      id='Pname'
                      className=" p-2.5 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor="Page" className="block mb-2 text-sm font-medium text-gray-900">
                      Age
                    </lable>
                    <input onChange={formik.handleChange}
                    id='Page'
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label  htmlFor='Gender' className="block mb-2 text-sm font-medium text-gray-900">
                      Gender
                    </label>
                    <select   onChange={formik.handleChange} id='Gender' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="others"> Others</option>
                    </select>
                  </div>
                  <div>
                    <lable htmlFor='AttenderMobile' className="block mb-2 text-sm font-medium text-gray-900">
                      Attender Mobile
                    </lable>
                    <input onChange={formik.handleChange}
                    id="AttenderMobile"
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor='AlternateMobile' className="block mb-2 text-sm font-medium text-gray-900">
                      AlternateMobile
                    </lable>
                    <input onChange={formik.handleChange}
                    id="AlternateMobile"
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="RequiredBloodGroup" className="block mb-2 text-sm font-medium text-gray-900">
                      RequiredBloodGroup
                    </label>
                    <select id='RequiredBloodGroup' onChange={formik.handleChange}  className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>A+</option>
                      <option>B+</option>
                      <option>O+</option>
                    </select>
                  </div>
                  <div>
                    <label  htmlFor='DiseaseSufferingFrom' className="block mb-2 text-sm font-medium text-gray-900">
                      DiseaseSufferingFrom
                    </label>
                    <input onChange={formik.handleChange}
                     id='DiseaseSufferingFrom'
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable htmlFor="RequirementUrgency" className="block mb-2 text-sm font-medium text-gray-900">
                      RequirementUrgency
                    </lable>
                    <select id='RequirementUrgency' onChange={formik.handleChange}
                     className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Emergency Needed</option>
                      <option>1 day</option>
                      <option>2 days</option>
                    </select>
                  </div>
                </div>
              </div>

              <legend>HospitalDetails:</legend>
              <div
                id="hospitalDetails"
                className="border border-black rounded-lg p-4 mt-6"
              >
                <div className="grid gap-4 mb-2 md:grid-cols-2">
                  <div>
                    <label htmlFor="HospitalName" className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalName
                    </label>
                    <input onChange={formik.handleChange}
                    id='HospitalName'
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor='HospitalCity'className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalCity
                    </label>
                    <input onChange={formik.handleChange}
                     id='HospitalCity'
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="Landmark" className="block mb-2 text-sm font-medium text-gray-900">
                      Landmark
                    </label>
                    <input onChange={formik.handleChange}
                     id='Landmark'
                     
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="HospitalState"  className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalState
                    </label>
                    <input onChange={formik.handleChange} id='HospitalState'
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor='Pincode'className="block mb-2 text-sm font-medium text-gray-900">
                      Pincode
                    </label>
                    <input onChange={formik.handleChange}
                    id='Pincode' 
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="number"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button type="submit"  className="border  rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
                  Request
                </button>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
}
