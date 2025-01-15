import React from 'react'
import type { LayoutProps } from '../types/layout'



const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <nav>this navbar</nav>
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  )
}

export default AdminLayout
