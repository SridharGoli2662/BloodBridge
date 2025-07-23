import React, { useEffect } from "react";
import logo from "../assets/BloodBridgeLogo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

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
          <Link className="hover:bg-[#e89492] p-1.5 rounded-[10px]" to="/user">
            <li>User</li>
          </Link>
          <Link
            className="hover:bg-[#e89492] p-1.5 rounded-[10px]"
            to="/emergency"
          >
            <li>Emergency</li>
          </Link>
        </div>
      </div>
    </>
  );
}
