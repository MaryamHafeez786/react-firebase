import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./pages/RegisterAndLogin.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterAndLogin />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
