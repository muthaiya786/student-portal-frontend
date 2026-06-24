import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/api';
import { useAuth } from '../../../context/AuthContext';

const StudentEditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [profileId, setProfileId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/students/me');
        if (data) {
          setProfileId(data._id);
          setFormData({
            firstName: data.firstName || user?.firstName || '',
            lastName: data.lastName || user?.lastName || '',
            email: data.email || user?.email || '',
            phone: data.phone || '',
            dob: data.dob ? data.dob.split('T')[0] : '',
            address: data.address || '',
            city: data.city || '',
            state: data.state || '',
            pincode: data.pincode || ''
          });
        }
      } catch (error) {
        // If 404, it means profile hasn't been created yet, which is fine
        console.log("No existing profile found. Creating a new one on save.");
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (profileId) {
        await api.put(`/students/${profileId}`, formData);
      } else {
        await api.post('/students', formData);
      }
      navigate('/student/profile');
    } catch (error) {
      console.error('Failed to save profile', error);
      alert('Failed to save profile');
    }
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Edit Profile</h1>
      
      <div className="glass-card">
        <form onSubmit={handleSave}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Personal Information</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">First Name</label>
              <input type="text" name="firstName" className="form-input" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Last Name</label>
              <input type="text" name="lastName" className="form-input" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required readOnly />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Phone Number</label>
              <input type="text" name="phone" className="form-input" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-input" value={formData.dob} onChange={handleChange} />
          </div>

          <h3 style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--primary)' }}>Address Information</h3>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input type="text" name="address" className="form-input" value={formData.address} onChange={handleChange} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-input" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">State</label>
              <input type="text" name="state" className="form-input" value={formData.state} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Pincode</label>
              <input type="text" name="pincode" className="form-input" value={formData.pincode} onChange={handleChange} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/student/profile')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentEditProfile;
