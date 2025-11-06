import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Residential from './pages/Residential';
import StrategicServices from './pages/StrategicServices';
import ITServices from './pages/ITServices';
import Cybersecurity from './pages/Cybersecurity';
import CloudInfrastructure from './pages/CloudInfrastructure';
import ITSolutions from './pages/ITSolutions';
import About from './pages/About';
import HomeCareBasic from './pages/HomeCareBasic';
import HomeCarePlus from './pages/HomeCarePlus';
import HomeCareElite from './pages/HomeCareElite';
import PaymentSuccess from './pages/PaymentSuccess';
import './Services.css';
import './Home.css';
import './Residential.css';
import './ServiceDetail.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/services" element={<Services />} />
          <Route path="/strategic-services" element={<StrategicServices />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential/homecare-basic" element={<HomeCareBasic />} />
          <Route path="/residential/homecare-plus" element={<HomeCarePlus />} />
          <Route path="/residential/homecare-elite" element={<HomeCareElite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
