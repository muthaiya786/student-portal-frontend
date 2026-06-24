import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import api from '../../../utils/api';

const StudentProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/students/me');
        setProfile(data);
      } catch (error) {
        console.error('Profile not found', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  
  if (loading) return <div className="container" style={{ padding: '4rem' }}>Loading profile...</div>;

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>My Profile</h1>
        <Link to="/student/profile/edit" className="btn btn-primary">
          <FaUserEdit /> Edit Profile
        </Link>
      </div>

      <div className="glass-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--primary-gradient)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: 'white', fontWeight: 'bold' }}>
            {user?.name?.charAt(0) || user?.firstName?.charAt(0) || 'S'}
          </div>
          <h2 style={{ color: 'var(--primary)' }}>{user?.firstName} {user?.lastName}</h2>
          <p style={{ color: 'var(--text-muted)' }}>{user?.email}</p>
        </div>
        
        <div style={{ flex: '2 1 400px' }}>
          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Personal Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Phone Number:</strong> {profile?.phone || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Gender:</strong> {profile?.gender || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Date of Birth:</strong> {profile?.dob ? new Date(profile.dob).toLocaleDateString() : 'Not set'}</div>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Academic Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Course:</strong> {profile?.course || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Batch:</strong> {profile?.batch || 'Not set'}</div>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Address Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Address:</strong> {profile?.address || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>City:</strong> {profile?.city || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>State:</strong> {profile?.state || 'Not set'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Pincode:</strong> {profile?.pincode || 'Not set'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
