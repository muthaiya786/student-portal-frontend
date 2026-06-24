import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FaUserGraduate, FaBook, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import api from '../../../utils/api';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/students/me');
        setProfile(data);
      } catch (error) {
        console.log("Profile not fully set up yet.");
      }
    };
    fetchProfile();
  }, []);

  const cards = [
    { title: 'Student Information', value: `${user?.firstName || ''} ${user?.lastName || ''}`, icon: <FaUserGraduate />, color: '#3B82F6' },
    { title: 'Course Details', value: profile?.course || 'Not Enrolled', icon: <FaBook />, color: '#10B981' },
    { title: 'Batch Information', value: profile?.batch || 'TBA', icon: <FaCalendarAlt />, color: '#F59E0B' },
    { title: 'Account Status', value: 'Active', icon: <FaCheckCircle />, color: '#8B5CF6' }
  ];

  return (
    <div className="animate-fade-in">
      <h1 style={{ marginBottom: '2rem' }}>Welcome, {user?.firstName || 'Student'}!</h1>
      
      {!profile && (
        <div style={{ background: '#FEF3C7', color: '#D97706', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          Please complete your profile setup by going to <strong>My Profile &gt; Edit Profile</strong>.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {cards.map((card, index) => (
          <div key={index} className="glass-card hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', color: card.color }}>
              {card.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{card.title}</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card mt-4" style={{ marginTop: '2rem' }}>
        <h2>Recent Updates</h2>
        <ul style={{ marginTop: '1rem', color: 'var(--text-muted)', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Welcome to the Student Portal! Get started by setting up your profile.</li>
          <li style={{ marginBottom: '0.5rem' }}>Check back here for administrative announcements.</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
