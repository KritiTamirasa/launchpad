// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="background-overlay">
        {/* Main Content */}
        <div className="masthead-content">
          <h1 className="masthead-title">Welcome to Field Scheduler</h1>
          <p className="masthead-subtitle">Choose your role to get started:</p>
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => navigate('/map')}>
              <i className="fas fa-user"></i> Player
            </button>
            <button className="btn btn-secondary" onClick={() => alert("Admin features coming soon!")}>
              <i className="fas fa-user-cog"></i> I am an Administrator
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" className="btn btn-dark"><i className="fab fa-twitter"></i></a>
          <a href="#" className="btn btn-dark"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="btn btn-dark"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;