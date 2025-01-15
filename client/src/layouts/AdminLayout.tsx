import React from 'react'
import type { LayoutProps } from '../types/layout'
import { Header } from '../components/admin'


const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='min-h-screen container mx-auto'>{children}</main>
      <footer>This is footer</footer>
    </div>
  )
}

export default AdminLayout
