import React, { useState } from 'react';
import './App.css';
import mapImage from './image/map.jpg';

function App() {
  const [selectedDot, setSelectedDot] = useState(null);

  // Function to handle dot click
  const handleDotClick = (dotId) => {
    setSelectedDot(dotId);
  };

  // Function to close the menu
  const handleCloseMenu = () => {
    setSelectedDot(null);
  };

  return (
    <div className="App">
      <div className="map-background"
        style={{
          backgroundImage: `url(${mapImage})`
        }}
      >
        {/* Red Dots */}
        <div className="dot dot1" onClick={() => handleDotClick(1)}></div>
        <div className="dot dot2" onClick={() => handleDotClick(2)}></div>
        <div className="dot dot3" onClick={() => handleDotClick(3)}></div>
        <div className="dot dot4" onClick={() => handleDotClick(4)}></div>

        {/* Conditional rendering of the menu */}
        {selectedDot && (
          <div className="menu" style={{ top: '50%', left: '50%' }}>
            <div className="menu-content">
              <p>Menu for Dot {selectedDot}</p>
              <button onClick={handleCloseMenu}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


