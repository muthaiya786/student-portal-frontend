import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash, FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import api from '../../../utils/api';

const AdminStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await api.get('/admin/students');
        setStudents(data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };
    fetchStudents();
  }, []);

  const handleExportCSV = async () => {
    try {
      const response = await api.get('/admin/export/csv', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'students.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Failed to export CSV', error);
      alert('Failed to export CSV');
    }
  };

  const filteredStudents = students.filter(student => 
    student.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Students Management</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" onClick={handleExportCSV}><FaDownload /> Export CSV</button>
        </div>
      </div>

      <div className="glass-card">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search by name, email or course..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary"><FaSearch /></button>
          </div>
          <button className="btn btn-outline"><FaFilter /> Filter</button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Student ID</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Full Name</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Email</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Course</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Batch</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? filteredStudents.map((student) => (
                <tr key={student._id} style={{ borderBottom: '1px solid var(--glass-border)', transition: 'background 0.3s' }}>
                  <td style={{ padding: '1rem' }}>{student._id.substring(student._id.length - 6)}</td>
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{student.firstName} {student.lastName}</td>
                  <td style={{ padding: '1rem' }}>{student.email}</td>
                  <td style={{ padding: '1rem' }}>{student.course}</td>
                  <td style={{ padding: '1rem' }}>{student.batch}</td>
                  <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <Link to={`/admin/students/${student._id}`} className="btn btn-outline" style={{ padding: '0.5rem' }} title="View Details">
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStudents;
