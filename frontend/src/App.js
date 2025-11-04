import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import './Services.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
