import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <PrivateRoute>
                <div className="container mx-auto px-4 py-8">
                  <Dashboard />
                </div>
              </PrivateRoute>
            } />
            <Route path="/calendar" element={
              <PrivateRoute>
                <div className="container mx-auto px-4 py-8">
                  <Calendar />
                </div>
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/landing" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;