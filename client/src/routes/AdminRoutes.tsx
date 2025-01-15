import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('role') === 'admin';
}

const AdminRoutes: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminRoutes;