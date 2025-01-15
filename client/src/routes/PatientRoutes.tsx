import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    // Add your patient authentication logic here
    return localStorage.getItem('role') === 'patient';
};

const PatientRoutes: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PatientRoutes;
