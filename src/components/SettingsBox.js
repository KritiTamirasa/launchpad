// src/SettingsBox.js
import React, { useState } from 'react';
import '../styling/SettingsBox.css'

function SettingsBox() {
  const [playerCount, setPlayerCount] = useState(1);
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [purdueId, setPurdueId] = useState('');

  const increasePlayerCount = () => {
    setPlayerCount(playerCount + 1);
  };

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePurdueIdChange = (e) => {
    setPurdueId(e.target.value);
  };

  return (
    <div className="settings-box">
      <h3>Settings</h3>
      
      <div className="settings-option">
        <label>Number of Players:</label>
        <div className="player-count">
          <span>{playerCount}</span>
          <button onClick={increasePlayerCount}>Add Player</button>
        </div>
      </div>
      
      <div className="settings-option">
        <label>Time Slot:</label>
        <input
          type="time"
          value={timeSlot}
          onChange={handleTimeSlotChange}
        />
      </div>

      <div className="settings-option">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="settings-option">
        <label>Purdue ID:</label>
        <input
          type="text"
          placeholder="Enter Purdue ID"
          value={purdueId}
          onChange={handlePurdueIdChange}
        />
      </div>
    </div>
  );
}

export default SettingsBox;
