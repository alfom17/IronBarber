import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
import DatePage from "./pages/DatePage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/date/:id" element={<EditPage />} />
        <Route path="/date" element={<CalendarPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
