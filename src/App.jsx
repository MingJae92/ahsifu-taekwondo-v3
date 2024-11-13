import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Membersonly from "./Pages/Memebersonly/Membersonly";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/membersonly" element={<Membersonly />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
