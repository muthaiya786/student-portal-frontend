import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import api from '../../../utils/api';

const AdminStudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data } = await api.get(`/students/${id}`);
        setStudent(data);
      } catch (error) {
        console.error('Failed to fetch student details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  if (loading) return <div className="container" style={{ padding: '4rem' }}>Loading details...</div>;
  
  if (!student) return <div className="container" style={{ padding: '4rem' }}>Student not found.</div>;

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-outline" onClick={() => navigate(-1)} style={{ padding: '0.5rem 1rem' }}>
            <FaArrowLeft /> Back
          </button>
          <h1>Student Details</h1>
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--primary-gradient)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: 'white', fontWeight: 'bold' }}>
            {student.firstName?.charAt(0) || 'S'}
          </div>
          <h2 style={{ color: 'var(--primary)' }}>{student.firstName} {student.lastName}</h2>
          <p style={{ color: 'var(--text-muted)' }}>ID: {student._id}</p>
        </div>
        
        <div style={{ flex: '2 1 400px' }}>
          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Personal Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Email:</strong> {student.email}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Phone Number:</strong> {student.phone || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Gender:</strong> {student.gender || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Date of Birth:</strong> {student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</div>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Academic Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Course:</strong> {student.course || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Batch:</strong> {student.batch || 'N/A'}</div>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Address Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><strong style={{ color: 'var(--text-muted)' }}>Address:</strong> {student.address || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>City:</strong> {student.city || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>State:</strong> {student.state || 'N/A'}</div>
            <div><strong style={{ color: 'var(--text-muted)' }}>Pincode:</strong> {student.pincode || 'N/A'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentDetails;
