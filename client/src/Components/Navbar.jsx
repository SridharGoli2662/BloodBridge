import React from "react";
import logo from "../assets/BloodBridgeLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar max-w-screen h-16">
        <div className="nav-left">
          <img src={logo} alt="logo" className="w-28" />
        </div>
        <div className="nav-right">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>

          <Link to="/request">
            <li>Request</li>
          </Link>
          <Link to="/user">
            <li>User</li>
          </Link>
          <Link to="/emergency">
            <li>Emergency</li>
          </Link>
          
        </div>
      </div>
    </>
  );
}
