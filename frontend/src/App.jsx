import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Recommendations from './pages/Recommendations';
import Notices from './pages/Notices';
import Facilities from './pages/Facilities';
import CollegeInfo from './pages/CollegeInfo';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import CalendarPage from './pages/CalendarPage';
import AdministrationPage from './pages/AdministrationPage';
import AcademicNEP from './pages/academics/AcademicNEP';
import AcademicSyllabus from './pages/academics/AcademicSyllabus';
import AcademicElectives from './pages/academics/AcademicElectives';
import AcademicSectionIncharge from './pages/academics/AcademicSectionIncharge';
import AcademicSwayam from './pages/academics/AcademicSwayam';
import AcademicsHub from './pages/academics/AcademicsHub';
// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Layout Wrapper to conditionally show Layout
const LayoutWrapper = ({ children }) => {
    return <Layout>{children}</Layout>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Student Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Dashboard /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Profile /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/recommendations" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Recommendations /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/notices" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Notices /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/facilities" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Facilities /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/facilities/:section" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Facilities /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/facilities/:section/:category" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Facilities /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/facilities/:section/:category/:subcategory" 
          element={
            <ProtectedRoute>
              <LayoutWrapper><Facilities /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />
        <Route
          path="/college-info"
          element={
            <ProtectedRoute>
              <LayoutWrapper><CollegeInfo /></LayoutWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <LayoutWrapper><CalendarPage /></LayoutWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/administration"
          element={
            <ProtectedRoute>
              <LayoutWrapper><AdministrationPage /></LayoutWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/administration/:section"
          element={
            <ProtectedRoute>
              <LayoutWrapper><AdministrationPage /></LayoutWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/administration/:section/:subsection"
          element={
            <ProtectedRoute>
              <LayoutWrapper><AdministrationPage /></LayoutWrapper>
            </ProtectedRoute>
          }
        />

        {/* Academics Routes */}
        <Route path="/academics" element={<ProtectedRoute><LayoutWrapper><AcademicsHub /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/nep" element={<ProtectedRoute><LayoutWrapper><AcademicNEP /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/syllabus" element={<ProtectedRoute><LayoutWrapper><AcademicSyllabus /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/syllabus/:category" element={<ProtectedRoute><LayoutWrapper><AcademicSyllabus /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/electives" element={<ProtectedRoute><LayoutWrapper><AcademicElectives /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/electives/:category" element={<ProtectedRoute><LayoutWrapper><AcademicElectives /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/section-incharge" element={<ProtectedRoute><LayoutWrapper><AcademicSectionIncharge /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/section-incharge/:category" element={<ProtectedRoute><LayoutWrapper><AcademicSectionIncharge /></LayoutWrapper></ProtectedRoute>} />
        <Route path="/academics/swayam" element={<ProtectedRoute><LayoutWrapper><AcademicSwayam /></LayoutWrapper></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute adminOnly={true}>
              <LayoutWrapper><AdminDashboard /></LayoutWrapper>
            </ProtectedRoute>
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
