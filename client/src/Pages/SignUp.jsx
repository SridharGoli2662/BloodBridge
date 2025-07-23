import axios from "axios";
import { useFormik } from "formik";
import Navbar from "../Components/Navbar";
export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      Pincode: "",
      State: "",
      Street: "",
      City: "",
      Mobile: "",
      BloodGroup: "",
      Lname: "",
      Fname: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/user/signup",
          values,
          { withCredentials: true }
        );
        console.log(res);
        // console.log(values)
        console.log("data sent sucessfully");
        // actions.resetForm()
        formik.resetForm();
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                placeholder="sample@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.Email}
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
                onChange={formik.handleChange}
                type="password"
                id="Password"
                value={formik.values.Password}
                name="Password"
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                placeholder="LastName"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
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
                className="block mb-2 text-sm font-medium text-black"
                htmlFor="Mobile"
              >
                Mobile
              </label>
              <input
                onChange={formik.handleChange}
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                type="number"
                id="Mobile"
                value={formik.values.Mobile}
                name="Mobile"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                name="City"
                id="City"
                type="text"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                type="text"
                name="Street"
                id="Street"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
              />
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
                className="border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                type="text"
                name="Pincode"
                value={formik.values.Pincode}
                id="PinCode"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border rounded-md block mx-auto text-white border-gray-400 bg-red-500 p-2 hover:bg-red-800 transition-colors"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
