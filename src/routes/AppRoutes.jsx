import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Layouts
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Students from '../pages/Students/Students';
import Staffs from '../pages/Staffs/Staffs';
import FAQ from '../pages/FAQ/FAQ';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

// Student Dashboard
import StudentDashboard from '../dashboard/student/Dashboard/StudentDashboard';
import StudentProfile from '../dashboard/student/Profile/StudentProfile';
import StudentEditProfile from '../dashboard/student/EditProfile/StudentEditProfile';

// Admin Dashboard
import AdminDashboard from '../dashboard/admin/Dashboard/AdminDashboard';
import AdminStudents from '../dashboard/admin/Students/AdminStudents';
import AdminStudentDetails from '../dashboard/admin/StudentDetails/AdminStudentDetails';

const PublicLayout = ({ children }) => (
  <div className="app-container">
    <Navbar />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

const DashboardLayout = ({ children, role }) => (
  <div className="app-container" style={{ flexDirection: 'row' }}>
    <Sidebar role={role} />
    <main className="main-content" style={{ padding: '2rem', flex: 1, height: '100vh', overflowY: 'auto' }}>
      {children}
    </main>
  </div>
);

const ProtectedRoute = ({ children, allowedRole }) => {
  const { userRole } = useAuth();
  if (userRole !== allowedRole) {
    return <Navigate to="/login" replace />;
  }
  return <DashboardLayout role={userRole}>{children}</DashboardLayout>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/students" element={<PublicLayout><Students /></PublicLayout>} />
      <Route path="/staffs" element={<PublicLayout><Staffs /></PublicLayout>} />
      <Route path="/faq" element={<PublicLayout><FAQ /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
      <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />

      {/* Student Routes */}
      <Route path="/student/dashboard" element={<ProtectedRoute allowedRole="student"><StudentDashboard /></ProtectedRoute>} />
      <Route path="/student/profile" element={<ProtectedRoute allowedRole="student"><StudentProfile /></ProtectedRoute>} />
      <Route path="/student/profile/edit" element={<ProtectedRoute allowedRole="student"><StudentEditProfile /></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/students" element={<ProtectedRoute allowedRole="admin"><AdminStudents /></ProtectedRoute>} />
      <Route path="/admin/students/:id" element={<ProtectedRoute allowedRole="admin"><AdminStudentDetails /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
