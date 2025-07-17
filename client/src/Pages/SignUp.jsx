import axios from "axios";
import { useFormik } from "formik";
export default function SignUp() {

  const formik=useFormik(
          {
              initialValues:{
                Email:'',
                Password:'',
                Pincode:'',
                State:'',
                Street:'',
                City:'',
                Mobile:'',
                BloodGroup:'',
                Lname:"",
                Fname:""
              },
              onSubmit:async(values)=>{
                  try{
                    const res=await axios.post("http://localhost:4000/user/signup",values)
                    console.log(res)
                    // console.log(values)
                    console.log("data sent sucessfully")
                    // actions.resetForm()
                    formik.resetForm()
                  }catch(err)
                  {
                    console.log(err)
                  }
              }
          }
      )
  return (
    <>
      <div>
        <form
          className="p-3"
          style={{
            backgroundColor: "#f2f2f2",
            width: "50%",
            margin: "20px auto",
            borderRadius: "5px",
          }}
          onSubmit={formik.handleSubmit}
        >
          <div className=" grid gap-4 mb-2 md:grid-cols-1">
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
                value={formik.values.Email}
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
               onChange={formik.handleChange}
                type="text"
                id="Password"
                value={formik.values.Password}
                name="Password"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
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
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="LastName"
              ></input>
            </div>
          </div>

          <div className="grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="BloodGroup"
              >
                BloodGroup
              </label>
              <select
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="BloodGroup"
                id="BloodGroup"
                value={formik.values.BloodGroup}
                onChange={formik.handleChange}
                required
              >
                <option value="">SelectOne</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
              </select>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Mobile"
              >
                Mobile
              </label>
              <input 
               onChange={formik.handleChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="number"
                id="Mobile"
                value={formik.values.Mobile}
                name="Mobile"
              ></input>
            </div>
          </div>
          <div className="grid gap-4 mb-2 md:grid-cols-2" id="Address">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="City"
              >
                City
              </label>
              <input 
               onChange={formik.handleChange}
               value={formik.values.City}
                className=" g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="City"
                id="City"
                type="text"
              ></input>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="Street"
              >
                Street
              </label>
              <input 
               onChange={formik.handleChange}
               value={formik.values.Street}
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                name="Street"
                id="Street"
              ></input>
            </div>
          </div>
          <div className=" grid gap-4 mb-2 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
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
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="PinCode"
              >
                PinCode
              </label>
              <input 
               onChange={formik.handleChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                name="Pincode"
                value={formik.values.Pincode}
                id="PinCode"
              ></input>
            </div>
          </div>
          <div>
            <button type="submit" className="border rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
