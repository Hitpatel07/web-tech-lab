import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/custom-timetable ">📅 Timetable</Link></li>
        <li><Link to="/grade-calculator">📊 Grades</Link></li>
        <li><Link to="/subject-summary">ℹ️ Subjects</Link></li>
        <li><Link to="/AboutPage">ℹ️ About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
