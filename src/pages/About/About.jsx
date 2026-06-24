import React from 'react';


const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 className="section-title">About Our Organization</h1>
      <div className="glass-card mt-4" style={{ marginTop: '2rem' }}>
        <h2>Mission & Vision</h2>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          Our mission is to provide an intuitive and efficient portal that bridges the gap between students, educators, and administrators. 
          We envision a seamless academic journey supported by modern technology and robust infrastructure.
        </p>
        
        <h2 style={{ marginTop: '2rem' }}>Portal Benefits</h2>
        <ul style={{ marginTop: '1rem', color: 'var(--text-muted)', listStyle: 'disc', paddingLeft: '2rem' }}>
          <li>Centralized access to all academic records.</li>
          <li>Direct communication channels with faculty members.</li>
          <li>Real-time updates on courses, batches, and schedules.</li>
          <li>Secure and private management of personal information.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
