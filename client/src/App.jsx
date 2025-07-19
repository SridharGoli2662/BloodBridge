import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RequestForm from "./Pages/RequestForm";
import UserCredentials from "./Pages/UserCredentials";
import Emergency from "./Pages/Emergency";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/request" element={<RequestForm />}></Route>
      <Route path="/user" element={<UserCredentials />}></Route>
      <Route path="/emergency" element={<Emergency />}></Route>
    </Routes>
  );
}

export default App;
