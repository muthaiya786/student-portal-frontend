import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserGraduate, FaChalkboardTeacher, FaQuestionCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-card">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaUserGraduate className="logo-icon" />
          <span>Student Portal</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              <FaInfoCircle /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              <FaUserGraduate /> Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/staffs" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              <FaChalkboardTeacher /> Staffs
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              <FaQuestionCircle /> FAQ
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-outline">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            <FaUserPlus /> Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
