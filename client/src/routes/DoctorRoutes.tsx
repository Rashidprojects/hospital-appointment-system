import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    // Add your doctor authentication logic here
    return localStorage.getItem('role') === 'doctor';
};

const DoctorRoutes: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default DoctorRoutes;
