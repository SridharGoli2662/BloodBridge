import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
export default function RequestForm() {
  const [formdata, setdata] = useState();
  // useEffect(async()=>{
  //   const resp=await axios.get("user/request")
  //   console.log(resp)
  // })
  const formik = useFormik({
    initialValues: {
      Gender: "",
      Page: "",
      Pname: "",
      HospitalState: "",
      Landmark: "",
      HospitalCity: "",
      HospitalName: "",
      RequirementUrgency: "",
      DiseaseSufferingFrom: "",
      RequiredBloodGroup: "",
      AlternateMobile: "",
      AttenderMobile: "",
      Pincode: "",
    },
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
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
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
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
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
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="others">Others</option>
                  </select>
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
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
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
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
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
                    onChange={formik.handleChange}
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                  >
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="DiseaseSufferingFrom"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Disease Suffering From
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="DiseaseSufferingFrom"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="RequirementUrgency"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Requirement Urgency
                  </label>
                  <select
                    id="RequirementUrgency"
                    onChange={formik.handleChange}
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                  >
                    <option>Emergency Needed</option>
                    <option>1 day</option>
                    <option>2 days</option>
                  </select>
                </div>
              </div>
            </div>

            <legend className="text-xl font-semibold mb-4 text-black">
              Hospital Details:
            </legend>
            <div
              id="hospitalDetails"
              className="border border-gray-400 rounded-lg p-4 mb-6"
            >
              <div className="grid gap-4 mb-2 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="HospitalName"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital Name
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="HospitalName"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="HospitalCity"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital City
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="HospitalCity"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Landmark"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Landmark
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="Landmark"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="HospitalState"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Hospital State
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="HospitalState"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Pincode"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Pincode
                  </label>
                  <input
                    onChange={formik.handleChange}
                    id="Pincode"
                    className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                    type="number"
                  />
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
