// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signin from "./signup";
import Home from "./home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
