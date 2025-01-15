import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AdminDashboard, DoctorDashboard, LoginPage, PatientDashboard } from './pages';
import { DoctorRoutes, PatientRoutes } from './routes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />

        {/* Admin protected Routes */}

        {/* <Route element= {<AdminRoutes />} >
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route> */}

        <Route path='/admin/dashboard' element={<AdminDashboard />} />

        {/* Doctor Protected Routes */}
        <Route element={<DoctorRoutes />}>
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        </Route>
        
        {/* Patient Protected Routes */}
        <Route element={<PatientRoutes />}>
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes;