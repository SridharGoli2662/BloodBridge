import axios from "axios";
import * as yup from "yup";
import { FormikConsumer, useFormik } from "formik";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { useState } from "react";
export default function SignUp() {
  const[loading,setLoading]=useState(false);
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      Pincode: '',
      State: "",
      Street: "",
      City: "",
      Mobile: "",
      BloodGroup: "",
      Lname: "",
      Fname: "",
    },
    validationSchema:yup.object({
      Email:yup.string().email("Invalid Email").required("Email is a Required Field"),
      Password:yup.string().min(6,"Password Must Be greater than 6 characters").required("Password is a Required Field"),
      Pincode: yup.number().required("Pincode is Required"),
      State: yup.string().required("State is Required"),
      Street: yup.string().required("State is Required"),
      City: yup.string().required("State is Required"),
      Mobile: yup.number().required(),
      BloodGroup: yup.string().required("BloodGroup is Required"),
      Lname: yup.string().required("LastName is Required"),
      Fname: yup.string().required("FirstName is Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:4000/user/signup",
          values,
          { withCredentials: true }
        );
        toast.success(res.data)
        setLoading(false)
        // console.log(res)
        formik.resetForm();
      } catch (err) {
        // console.log(err.re)
        setLoading(false)
        toast.error(err.response.data);
      }
    },
  });
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#FDDAD4", minHeight: "100vh" }}
        className=" mt-3 flex items-center justify-center py-12"
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
                className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
            
                placeholder="sample@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
               {formik.touched.Email && formik.errors.Email && (
          <div className="text-sm text-red-500">{formik.errors.Email}</div>
        )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                onChange={formik.handleChange}
                type="password"
                id="Password"
                value={formik.values.Password}
                name="Password"
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

              />
               {formik.touched.Password && formik.errors.Password && (
          <div className="text-sm text-red-500">{formik.errors.Password}</div>
        )}
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Fname"
              >
                FirstName
              </label>
              <input
                onChange={formik.handleChange}
                name="Fname"
                id="Fname"
                type="text"
                value={formik.values.Fname}
                placeholder="FirstName"
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

              />
               {formik.touched.Fname && formik.errors.Fname && (
          <div className="text-sm text-red-500">{formik.errors.Fname}</div>
        )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Lname"
              >
                LastName
              </label>
              <input
                onChange={formik.handleChange}
                type="text"
                id="Lname"
                value={formik.values.Lname}
                name="Lname"
              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}
                placeholder="LastName"
              />
               {formik.touched.Lname && formik.errors.Lname && (
          <div className="text-sm text-red-500">{formik.errors.Lname}</div>
        )}
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="BloodGroup"
              >
                BloodGroup
              </label>
              <select
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

                name="BloodGroup"
                id="BloodGroup"
                value={formik.values.BloodGroup}
                onChange={formik.handleChange}
        
              >
                <option value="">SelectOne</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
              </select>
               {formik.touched.BloodGroup && formik.errors.BloodGroup && (
          <div className="text-sm text-red-500">{formik.errors.BloodGroup}</div>
        )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Mobile"
              >
                Mobile
              </label>
              <input
                onChange={formik.handleChange}
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

                type="number"
                id="Mobile"
                value={formik.values.Mobile}
                name="Mobile"
              />
               {formik.touched.Mobile && formik.errors.Mobile && (
          <div className="text-sm text-red-500">{formik.errors.Mobile}</div>
        )}
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2" id="Address">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="City"
              >
                City
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.City}
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

                name="City"
                id="City"
                type="text"
              />
               {formik.touched.City && formik.errors.City && (
          <div className="text-sm text-red-500">{formik.errors.City}</div>
        )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Street"
              >
                Street
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.Street}
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

                type="text"
                name="Street"
                id="Street"
              />
               {formik.touched.Street && formik.errors.Street && (
          <div className="text-sm text-red-500">{formik.errors.Street}</div>
        )}
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="State"
              >
                State
              </label>
              <input
                onChange={formik.handleChange}
                name="State"
                id="State"
                value={formik.values.State}
                type="text"
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

              />
               {formik.touched.State && formik.errors.State && (
          <div className="text-sm text-red-500">{formik.errors.State}</div>
        )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="PinCode"
              >
                PinCode
              </label>
              <input
                onChange={formik.handleChange}
                              className={`${formik.touched.Lname && formik.errors.Lname ? ' border border-red-500': 'border border-gray-400'} text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white`}

                type="number"
                name="Pincode"
                value={formik.values.Pincode}
                id="PinCode"
              />
               {formik.touched.Pincode && formik.errors.Pincode && (
          <div className="text-sm text-red-500">{formik.errors.Pincode}</div>
        )}
            </div>
          </div>
          <div>
            <button 
              type="submit"
              className="border rounded-md block mx-auto text-white border-gray-400 bg-red-500 p-2 hover:bg-red-800 transition-colors"
              disabled={loading?true:false}
            >
              {!loading?"SignUp":"Loading...."}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
