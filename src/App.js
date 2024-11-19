
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Package from "./Pages/Package";
import Hotel from "./Pages/Hotel";
import Flight from "./Pages/Flight";
import Transport from "./Pages/Transport";
import Offer from './Pages/Offer';
import Blog from "./Pages/Blog";
import Subscription from "./Pages/Subscription";
import HotelBooking from './Pages/Hotel/HotelBooking';
import Mail from './Pages/Mail';
import Cash from './Pages/Cash';
import Online from './Pages/Online';

// import Protected from './components/protected';


function App() {
  // const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Package" element={<Package />} />
        <Route path="/Hotel/:zone_id?" element={<Hotel />} />
        <Route path="/Hotel/booking/:id" element={<HotelBooking />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Mail" element={<Mail />} />
        <Route path="/Cash" element={<Cash />} />
        <Route path="/Online" element={<Online />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
