// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styling/App.css';
import mapImage from './image/map.jpg';
import HomePage from './HomePage';
import SettingsBox from './components/SettingsBox'; // Import SettingsBox component

function Map() {
  const [selectedDot, setSelectedDot] = useState(null);

  const handleDotClick = (dotId) => {
    setSelectedDot(dotId);
  };

  const handleCloseMenu = () => {
    setSelectedDot(null);
  };

  return (
    <div className="map-page">
      <div className="map-background" style={{ backgroundImage: `url(${mapImage})` }}>
        <div className="dot dot1" onClick={() => handleDotClick(1)}></div>
        <div className="dot dot2" onClick={() => handleDotClick(2)}></div>
        <div className="dot dot3" onClick={() => handleDotClick(3)}></div>
        <div className="dot dot4" onClick={() => handleDotClick(4)}></div>

        {selectedDot && (
          <div className="menu" style={{ top: '50%', left: '50%' }}>
            <div className="menu-content">
              <p>Menu for Dot {selectedDot}</p>
              <button onClick={handleCloseMenu}>Close</button>
            </div>
          </div>
        )}
      </div>
      
      {/* Add SettingsBox in the top-right corner */}
      <SettingsBox />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
