
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Package" element={<Package />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Hotel/booking/:id" element={<HotelBooking />} />
        <Route path="/Flight" element={<Flight />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Subscription" element={<Subscription />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
