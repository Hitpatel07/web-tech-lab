import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/timetable">📅 Timetable</Link></li>
        <li><Link to="/grades">📊 Grades</Link></li>
        <li><Link to="/about">ℹ️ About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
