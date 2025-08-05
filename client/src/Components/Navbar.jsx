import React, { useEffect } from "react";
import logo from "../assets/BloodBridgeLogo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  // async function toggleUserPage() {
  //   // try {
  //   //   const userInfo = await axios.get("http://localhost:4000/user/request", {
  //   //     withCredentials: true,
  //   //   });
  //   //   console.log(userInfo);
  //   //   if (userInfo == false) {
  //   //     throw new Error("no user loged in");
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error.message);
  //   // }
  //   const userInfo = await axios.get("http://localhost:4000/user/request", {
  //     withCredentials: true,
  //   });
  //   console.log(userInfo);
  // }
  // useEffect(() => {
  //   toggleUserPage();
  // });

  const location = useLocation();
  async function logout() {
    const response = await axios.get("http://localhost:4000/user/logout", {
      withCredentials: true,
    });
    console.log(response);
  }
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div className="navbar max-w-screen h-16">
        <div className="nav-left">
          <img src={logo} alt="logo" className="w-28" />
        </div>
        <div className="nav-right">
          <Link className="hover:bg-[#e89492] p-1.5 rounded-[10px]" to="/">
            <li>Home</li>
          </Link>
          <a
            className="hover:bg-[#e89492] p-1.5 rounded-[10px]"
            href="/home#About"
          >
            <li>About</li>
          </a>

          <Link
            className="hover:bg-[#e89492] p-1.5 rounded-[10px]"
            to="/request"
          >
            <li>Request</li>
          </Link>
          <Link
            className="hover:bg-[#e89492] p-1.5 rounded-[10px]"
            to="/emergency"
          >
            <li>Emergency</li>
          </Link>
          <Link className="hover:bg-[#e89492] p-1.5 rounded-[10px]" to="/">
            <li onClick={logout}>Logout</li>
          </Link>
          <Link
            className="hover:bg-[#e89492] p-1.5 rounded-[10px] flex items-center"
            to="/userPage"
          >
            <li>
              <img
                src={logo}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-red-500 object-cover shadow-sm"
              />
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
