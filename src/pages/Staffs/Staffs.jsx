import React from 'react';

const Staffs = () => {
  const staffData = [
    { name: 'Dr. Jane Doe', role: 'Head of Computer Science', email: 'jane.doe@example.com' },
    { name: 'Prof. John Smith', role: 'Mathematics Lecturer', email: 'john.smith@example.com' },
    { name: 'Ms. Alice Johnson', role: 'Student Counselor', email: 'alice.j@example.com' },
  ];

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 className="section-title">Faculty & Staff Information</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
        {staffData.map((staff, idx) => (
          <div key={idx} className="glass-card hover-scale" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{staff.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{staff.role}</p>
            </div>
            <div>
              <a href={`mailto:${staff.email}`} className="btn btn-outline">Contact</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staffs;
