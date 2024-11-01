import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import VoterDashboard from './pages/VoterDashboard';
import Login from './pages/Login';
import { useAuthStore } from './store/authStore';

const App: React.FC = () => {
  const { isAuthenticated, userRole } = useAuthStore();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              !isAuthenticated ? (
                <Login />
              ) : (
                <Navigate to={userRole === 'admin' ? '/admin' : '/voter'} />
              )
            } 
          />
          <Route 
            path="/admin" 
            element={
              isAuthenticated && userRole === 'admin' ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
          <Route 
            path="/voter" 
            element={
              isAuthenticated && userRole === 'voter' ? (
                <VoterDashboard />
              ) : (
                <Navigate to="/" />
              )
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;