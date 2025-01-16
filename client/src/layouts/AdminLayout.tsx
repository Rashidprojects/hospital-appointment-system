import React from 'react'
import type { LayoutProps } from '../types/layout'
import { Header, Navbar } from '../components/admin'


const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flexflex-col min-h-screen'>
      <Header />
      <div className='flex flex-1 mt-4'>
        <aside className='w-80 min-h-screen '>
            <Navbar />
        </aside>
        <main className='container mx-auto'>{children}</main>
      </div>
      
      <footer className='container mx-auto'>
        <p>This is footer</p>
      </footer>
    </div>
  )
}

export default AdminLayout
