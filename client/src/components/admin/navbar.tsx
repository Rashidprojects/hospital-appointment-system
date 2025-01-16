import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='ml-14 border min-h-screen bg-navbar '>
        <h2 className='p-7 font-bold text-lightBlue text-[20px]'>General</h2>
        <ul className='pl-10 font-medium gap-4 flex flex-col '>
            <li>
                <Link to={'/admin/dashboard'} >Dashboard</Link>
            </li>
            <li>
                <Link to={''}>Appointments</Link>
            </li>
            <li>
                <Link to={''}>Patients</Link>
            </li>
            <li>
                <Link to={''}>Doctors</Link>
            </li>
            <li>
                <Link to={''}>Staff Management </Link>
            </li>
            <li>
                <Link to={''}>Financials</Link>
            </li>
            <li>
                <Link to={''}>Reports</Link>
            </li>
            <li>
                <Link to={''}>Settings</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar