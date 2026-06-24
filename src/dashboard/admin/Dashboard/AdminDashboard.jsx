import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import { FaUsers, FaUserCheck, FaBookOpen, FaUserPlus } from 'react-icons/fa';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    coursesAvailable: 0,
    recentRegistrations: []
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/admin/dashboard');
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch admin stats', error);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { title: 'Total Students', value: stats.totalStudents, icon: <FaUsers />, color: '#3B82F6' },
    { title: 'Active Students', value: stats.activeStudents, icon: <FaUserCheck />, color: '#10B981' },
    { title: 'Courses Available', value: stats.coursesAvailable, icon: <FaBookOpen />, color: '#8B5CF6' },
    { title: 'Recent Registrations', value: stats.recentRegistrations.length, icon: <FaUserPlus />, color: '#F59E0B' }
  ];

  return (
    <div className="animate-fade-in">
      <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {cards.map((card, index) => (
          <div key={index} className="glass-card hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', color: card.color }}>
              {card.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{card.title}</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="glass-card">
          <h2 style={{ marginBottom: '1rem' }}>Recent Activity</h2>
          {stats.recentRegistrations.length > 0 ? (
             <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem' }}>
               {stats.recentRegistrations.map((student, idx) => (
                 <li key={idx} style={{ marginBottom: '0.5rem' }}>{student.firstName} {student.lastName} completed their profile.</li>
               ))}
             </ul>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No recent activity found.</p>
          )}
        </div>
        
        <div className="glass-card">
          <h2 style={{ marginBottom: '1rem' }}>System Alerts</h2>
          <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', color: '#10B981' }}>System operating normally.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
