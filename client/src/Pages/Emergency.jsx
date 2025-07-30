import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Emergency() {
  const navigate=useNavigate()
  const [requests, setRequests] = useState([
    // asdfghjk
    {
      id: 1,
      patient: "John Doe",
      bloodGroup: "A+",
      urgency: "Emergency Needed",
      hospital: "City Hospital",
      city: "Hyderabad",
      contact: "9876543210",
    },
    {
      id: 2,
      patient: "Priya Singh",
      bloodGroup: "O-",
      urgency: "1 day",
      hospital: "Sunrise Medical Center",
      city: "Bangalore",
      contact: "9123456780",
    },
    {
      id: 3,
      patient: "Rahul Kumar",
      bloodGroup: "B+",
      urgency: "2 days",
      hospital: "Apollo Hospital",
      city: "Chennai",
      contact: "9988776655",
    },
  ]);

  async function fetchdata() {
    try{
      const response = await axios.get('http://localhost:4000/request', { withCredentials: true });
      // setRequests(response.data);
    }catch(err)
    {
      console.log(err.message)
        navigate('/login')     
    }
  }
  useEffect(() => {
    // Example: fetch real data from backend
    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#FDDAD4", minHeight: "100vh" }}
        className="flex flex-col items-center py-12 mt-3"
      >
        <h1 className="text-3xl font-bold text-red-800 mb-8">
          Emergency Blood Requirements
        </h1>
        <div className="w-full max-w-4xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {requests?.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-gray-400 rounded-lg shadow-md p-6 flex flex-col justify-between text-black"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">{req.patient}</span>
                  <span className="text-base font-bold text-red-700">
                    {req.bloodGroup}
                  </span>
                </div>
                <div className="mb-1">
                  <span className="font-medium">Urgency:</span> {req.urgency}
                </div>
                <div className="mb-1">
                  <span className="font-medium">Hospital:</span> {req.hospital}
                </div>
                <div className="mb-1">
                  <span className="font-medium">City:</span> {req.city}
                </div>
                <div className="mb-1">
                  <span className="font-medium">Contact:</span> {req.contact}
                </div>
              </div>
              <button className="mt-4 bg-[#EC2420] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors font-semibold">
                Contact Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
