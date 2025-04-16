import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1 className="hero-title">📘 Smart Academia</h1>
        <p className="hero-subtitle">Your personalized academic assistant for ICT students</p>
      </div>

      <div className="features">
        <div className="feature-card">
          <h2>📅 Personalized Timetable</h2>
          <p>
            Select your division, batch, and core electives to instantly view your customized timetable.
            This feature ensures you never miss a class tailored to your unique elective combination.
          </p>
          <Link to="/timetable" className="feature-button">View Timetable</Link>
        </div>

        <div className="feature-card">
          <h2>📊 Grade & CPI Calculator</h2>
          <p>
            Input your marks for Mid-Sem, Internal Assessment, and End-Sem exams. This tool helps you track
            your academic progress and calculate your final CPI in real-time.
          </p>
          <Link to="/grade-calculator" className="feature-button">Calculate Grades</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;