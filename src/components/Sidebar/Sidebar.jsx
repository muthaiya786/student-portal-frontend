import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaTachometerAlt, FaUser, FaUserEdit, FaCog, FaSignOutAlt, FaUsers, FaDownload, FaUserGraduate } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const studentLinks = [
    { path: '/student/dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { path: '/student/profile', icon: <FaUser />, label: 'My Profile' },
    { path: '/student/profile/edit', icon: <FaUserEdit />, label: 'Edit Profile' },
  ];

  const adminLinks = [
    { path: '/admin/dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { path: '/admin/students', icon: <FaUsers />, label: 'Students' },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaUserGraduate className="sidebar-logo-icon" />
        <h2>{role === 'admin' ? 'Admin Panel' : 'Student Panel'}</h2>
      </div>
      
      <div className="sidebar-user">
        <div className="avatar">{user?.name?.charAt(0) || 'U'}</div>
        <div className="user-info">
          <h4>{user?.name || 'User'}</h4>
          <p>{role}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#" className="sidebar-link">
              <span className="icon"><FaCog /></span>
              <span className="label">Settings</span>
            </a>
          </li>
          <li>
            <button onClick={handleLogout} className="sidebar-link logout-btn">
              <span className="icon"><FaSignOutAlt /></span>
              <span className="label">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
