import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaLaptopCode } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">Welcome to the Student Portal</h1>
          <p className="hero-subtitle">
            Your centralized hub for academic excellence. Manage your profile, connect with staff, and access your courses seamlessly.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
            <Link to="/login" className="btn btn-outline btn-lg" style={{ background: 'white' }}>Login Now</Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-section container">
        <h2 className="section-title">Why Choose Our Portal?</h2>
        <div className="features-grid">
          <div className="feature-card glass-card hover-scale">
            <FaGraduationCap className="feature-icon" />
            <h3>Student Management</h3>
            <p>Easily view and update your personal and academic information in one place.</p>
          </div>
          <div className="feature-card glass-card hover-scale">
            <FaLaptopCode className="feature-icon" />
            <h3>Modern Dashboard</h3>
            <p>Access an intuitive, fast, and responsive dashboard designed for modern workflows.</p>
          </div>
          <div className="feature-card glass-card hover-scale">
            <FaChalkboardTeacher className="feature-icon" />
            <h3>Connect with Staff</h3>
            <p>Find faculty information and reach out to them directly through the directory.</p>
          </div>
          <div className="feature-card glass-card hover-scale">
            <FaBook className="feature-icon" />
            <h3>Course Details</h3>
            <p>Keep track of your enrolled courses, batches, and upcoming academic events.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
