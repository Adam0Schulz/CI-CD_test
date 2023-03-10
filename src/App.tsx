import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Events from 'pages/Events';
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { RegisterToEventPage } from "./pages/RegisterToEvent/RegisterToEventPage";
import Event from "./pages/Event/Event";
import NewEvent from 'pages/New Event/NewEvent';
import EditEvent from 'pages/Edit Event/EditEvent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<><Event /></>} />
        <Route path="/events/:id/edit" element={<><EditEvent /></>} />
        <Route path="/about" element={<><Navbar activePage='about' /><Footer /></>} />
        <Route path="/researchers" element={<><Navbar activePage='researchers' /><Footer /></>} />
        <Route path="/contact" element={<><Navbar activePage='contact' /><Footer /></>} />
        <Route path="/blog" element={<><Navbar activePage='blog' /><Footer /></>} />
        <Route path="/register-to-event" element={<RegisterToEventPage />} />
        <Route path='/events/new' element={<NewEvent />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
