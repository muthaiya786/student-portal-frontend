import React from 'react';
import { FaPlusCircle, FaSignInAlt, FaCheckCircle } from 'react-icons/fa';

const Students = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 className="section-title">Student Information</h1>
      
      <div className="features-grid" style={{ marginTop: '3rem' }}>
        <div className="feature-card glass-card hover-scale">
          <FaCheckCircle className="feature-icon" />
          <h3>Student Benefits</h3>
          <p>Gain access to exclusive resources, track your progress, and stay updated with the latest announcements.</p>
        </div>
        
        <div className="feature-card glass-card hover-scale">
          <FaPlusCircle className="feature-icon" />
          <h3>Registration Process</h3>
          <p>Sign up with your academic details, verify your email, and unlock your personalized dashboard instantly.</p>
        </div>
        
        <div className="feature-card glass-card hover-scale">
          <FaSignInAlt className="feature-icon" />
          <h3>Dashboard Features</h3>
          <p>Update your profile picture, manage your contact information, and download your academic records.</p>
        </div>
      </div>
    </div>
  );
};

export default Students;
