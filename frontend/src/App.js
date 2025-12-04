import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import StrategicServices from './pages/StrategicServices';
import ITServices from './pages/ITServices';
import Cybersecurity from './pages/Cybersecurity';
import CloudInfrastructure from './pages/CloudInfrastructure';
import ITSolutions from './pages/ITSolutions';
import About from './pages/About';
import PaymentSuccess from './pages/PaymentSuccess';
import StripeIntegration from './pages/StripeIntegration';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import DIYITPodcast from './pages/DIYITPodcast';
import ResourceHub from './pages/ResourceHub';
import './Services.css';
import './Home.css';
import './ServiceDetail.css';
import './FAQ.css';
import './Blog.css';
import './DIYITPodcast.css';
import './ResourceHub.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/strategic-services" element={<StrategicServices />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/stripe-integration" element={<StripeIntegration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/diy-it" element={<DIYITPodcast />} />
          <Route path="/blog/diy-it" element={<DIYITPodcast />} />
          <Route path="/resources" element={<ResourceHub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
