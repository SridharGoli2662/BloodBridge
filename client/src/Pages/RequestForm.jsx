import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
export default function RequestForm() {
  const [userInfo, setuserInfo] = useState();
  const navigate=useNavigate();
  async function getUserInfo()
  {
    try{
      const userInfoRes=await axios.get("http://localhost:4000/user/request",{withCredentials:true})
      if(userInfoRes==false)
      {
        throw new Error("no user loged in")
      }
    }
    catch(err)
    {
      console.log(err.message)
      setTimeout(() => {
        navigate('/login')
      }, 3000);
      // console.log("user is ")
    }
      // console.log(userInfo.data)
      // setuserInfo(userInfoRes.data)
      // console.log(userInfoRes)
  }
  useEffect(()=>{
      getUserInfo();
  })
  const formik = useFormik({
    initialValues: {
      pName: "",
      pAge: "",
      gender: "",
      attenderMobile: "",
      alternateMobile: "",
      requiredBloodGroup: "",
      diseaseSufferingFrom: "",
      hospitalState: "",
      landMark: "",
      hospitalCity: "",
      hospitalName: "",
      requirementUrgency: "",
      pincode: "",
    },
    validationSchema:yup.object({
          pName:yup.string().required("Enter Patient Name"),
          pAge:yup.number().required("Enter patient Age"),
          gender: yup.string().required("Enter Your Gender"),
          attenderMobile: yup.number("Number Should Not Be Text").required("Enter MobileNumber"),
          alternateMobile: yup.number(),
          requiredBloodGroup: yup.string().required("Enter requredBloodGroup"),
          diseaseSufferingFrom: yup.string().required(),
          hospitalState: yup.string().required("HospitalState is Required"),
          landMark:yup.string(),
          hospitalName: yup.string().required("HospitalName  is Required"),
          hospitalCity:yup.string().required("HospitalCity is Required"),
          requirementUrgency:yup.string().required("Enter requirementUrgency "),
          pincode:yup.number().required("Enter Pincode "),
        }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/user/request",
          values
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#FDDAD4", minHeight: "100vh" }}
        className="flex items-center justify-center py-12 mt-3"
      >
        <form
          style={{
            backgroundColor: "#fff",
            border: "1px solid #d1d5db",
            color: "#000",
          }}
          className="w-full max-w-2xl rounded-lg shadow-md p-8"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <legend className="text-xl font-semibold mb-4 text-black">
              Patient Details:
            </legend>
            <div
              id="patientDetails"
              className="border border-gray-400 rounded-lg p-4 mb-6"
            >
              <div className="grid gap-4 mb-2 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="Pname"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Patient Name
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="Pname"
                    name="pName"
                    className={`${
                      formik.touched.Email && formik.errors.Email
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                    />
                    {formik.touched.pName && formik.errors.pName && (
                      <div className="text-sm text-red-500">
                        {formik.errors.pName}
                      </div>
                    )}
                </div>
                <div>
                  <label
                    htmlFor="Page"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Age
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="Page"
                    name="pAge"
                    className={`${
                      formik.touched.pAge && formik.errors.pAge
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.pAge && formik.errors.pAge && (
                    <div className="text-sm text-red-500">
                      {formik.errors.pAge}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Gender"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Gender
                  </label>
                  <select
                    onChange={formik.handleChange}
                    id="Gender"
                    name="gender"
                    className={`${
                      formik.touched.gender && formik.errors.gender
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                  >
                   
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="others">Others</option>
                  </select>
                    {formik.touched.gender && formik.errors.gender && (
                    <div className="text-sm text-red-500">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="AttenderMobile"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Attender Mobile
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="AttenderMobile"
                    name="attenderMobile"
                    className={`${
                      formik.touched.attenderMobile && formik.errors.attenderMobile
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.attenderMobile && formik.errors.attenderMobile && (
                    <div className="text-sm text-red-500">
                      {formik.errors.attenderMobile}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="AlternateMobile"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Alternate Mobile
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="AlternateMobile"
                    name="alternateMobile"
                    className={`${
                      formik.touched.alternateMobile && formik.errors.alternateMobile
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.alternateMobile && formik.errors.alternateMobile && (
                    <div className="text-sm text-red-500">
                      {formik.errors.alternateMobile}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="RequiredBloodGroup"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Required Blood Group
                  </label>
                  <select
                    id="RequiredBloodGroup"
                    name="requiredBloodGroup"
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.requiredBloodGroup && formik.errors.requiredBloodGroup
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                  >
                   
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                  </select>
                    {formik.touched.requiredBloodGroup && formik.errors.requiredBloodGroup && (
                    <div className="text-sm text-red-500">
                      {formik.errors.requiredBloodGroup}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="diseaseSufferingFrom"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Disease Suffering From
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="diseaseSufferingFrom"
                    name="diseaseSufferingFrom"
                    className={`${
                      formik.touched.diseaseSufferingFrom && formik.errors.diseaseSufferingFrom
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.diseaseSufferingFrom && formik.errors.diseaseSufferingFrom && (
                    <div className="text-sm text-red-500">
                      {formik.errors.diseaseSufferingFrom}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="requirementUrgency"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Requirement Urgency
                  </label>
                  <select
                    id="requirementUrgency"
                    name="requirementUrgency"
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.requirementUrgency && formik.errors.requirementUrgency
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                  >
                    <option>Emergency Needed</option>
                    <option>1 day</option>
                    <option>2 days</option>
                  </select>
                   {formik.touched.requirementUrgency && formik.errors.requirementUrgency && (
                    <div className="text-sm text-red-500">
                      {formik.errors.requirementUrgency}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <legend className="text-xl font-semibold mb-4 text-black">
              Hospital Details:
            </legend>
            <div
              id="hospitalDetails"
              name="hospitalDetails"
              className="border border-gray-400 rounded-lg p-4 mb-6"
            >
              <div className="grid gap-4 mb-2 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="hospitalName"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital Name
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="hospitalName"
                    name="hospitalName"
                    className={`${
                      formik.touched.Email && formik.errors.Email
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.hospitalName && formik.errors.hospitalName && (
                    <div className="text-sm text-red-500">
                      {formik.errors.hospitalName}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="hospitalCity"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital City
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="hospitalCity"
                    name="hospitalCity"
                    className={`${
                      formik.touched.Email && formik.errors.Email
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.pName && formik.errors.pName && (
                    <div className="text-sm text-red-500">
                      {formik.errors.pName}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="landMark"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    LandMark
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="landMark"
                    name="landMark"
                    className={`${
                      formik.touched.landMark && formik.errors.landMark
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.landMark && formik.errors.landMark && (
                    <div className="text-sm text-red-500">
                      {formik.errors.landMark}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="hospitalState"
                    name="hospitalState"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital State
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="hospitalState"
                    name="hospitalState"
                    className={`${
                      formik.touched.hospitalState && formik.errors.hospitalState
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="text"
                  />
                 {formik.touched.hospitalState && formik.errors.hospitalState && (
                    <div className="text-sm text-red-500">
                      {formik.errors.hospitalState}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="pincode"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Pincode
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="pincode"
                    name="pincode"
                    className={`${
                      formik.touched.pincode && formik.errors.pincode
                        ? "border border-red-500"
                        : "border border-gray-400"
                    } text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                    type="number"
                  />
                   {formik.touched.pincode && formik.errors.pincode && (
                    <div className="text-sm text-red-500">
                      {formik.errors.pincode}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="border rounded-md block mx-auto text-white border-gray-400 bg-red-500 p-2 hover:bg-red-800 transition-colors"
              >
                Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
