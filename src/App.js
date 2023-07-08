import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './Components/AboutUsPage/AboutPage';
import CourierService from './Components/CourierServicePage/CourierService';
import Homepage from './Components/HomePage/Homepage';
import ServicePage from './Components/ServicePage/ServicePage';
import Footer from './Components/Footer';
// import './App.css';

function App() {
  return (
    <Router>
      <div className=''>

        <Routes>

          <Route path="/" element={<Homepage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/service" element={<ServicePage />} />

          <Route path="/courier" element={<CourierService />} />

        </Routes>

        <Footer />
        
      </div>

    </Router>
  );
}

export default App;
