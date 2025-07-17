import React from "react";
import Navbar from "../Components/Navbar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import UserCredentials from "./UserCredentials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
