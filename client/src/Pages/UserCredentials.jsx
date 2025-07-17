import React from "react";
import { Link } from "react-router-dom";

export default function UserCredentials() {
  return (
    <>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        signup
      </Link>
    </>
  );
}
