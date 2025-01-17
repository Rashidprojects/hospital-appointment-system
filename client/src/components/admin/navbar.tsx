import { BriefcaseBusiness, BriefcaseMedical, CalendarCheck, CircleDollarSignIcon, CircleHelp, LayoutDashboard, LogOut, NotebookPen, Settings, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='ml-14 border bg-navbar '>
        <h2 className='p-7 font-bold text-lightBlue text-[20px]'>General</h2>
        <ul className='pl-10 font-medium gap-6 flex flex-col tracking-wider '>
            <li className='flex items-center gap-2'>
                <LayoutDashboard className='text-lightBlue' />
                <Link to={'/admin/dashboard'} >Dashboard</Link>
            </li>
            <li className='flex items-center gap-2'>
                <CalendarCheck className='text-lightBlue' />
                <Link to={'/admin/appointments'}>Appointments</Link>
            </li>
            <li className='flex items-center gap-2'>
                <Users className='text-lightBlue' />
                <Link to={''}>Patients</Link>
            </li>
            <li className='flex items-center gap-2'>
                <BriefcaseMedical className='text-lightBlue' />
                <Link to={''}>Doctors</Link>
            </li>
            <li className='flex items-center gap-2'>
                <BriefcaseBusiness className='text-lightBlue' />
                <Link to={''}>Staff Management </Link>
            </li>
            <li className='flex items-center gap-2'>
                <CircleDollarSignIcon className='text-lightBlue' />
                <Link to={''}>Financials</Link>
            </li>
            <li className='flex items-center gap-2'>
                <NotebookPen className='text-lightBlue' />
                <Link to={''}>Reports</Link>
            </li>
            <li className='flex items-center gap-2'>
                <Settings className='text-lightBlue' />
                <Link to={''}>Settings</Link>
            </li>
        </ul>
        <ul className='pl-10 font-medium gap-4 flex flex-col mt-72 pb-11 '>
            <li className='flex items-center gap-2'>
                <CircleHelp className='text-lightBlue' />
                <Link to={''}>Help</Link>
            </li>
            <li className='flex items-center gap-2'>
                <LogOut className='text-lightBlue' />
                <Link to={''}>Logout</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar