import React from 'react'
import { useTheme } from '../context/theme-provider'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

const Header: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark';
  return (
    <header className=' sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 '>
        <div className='container mx-auto flex h-16 items-center justify-between' >
            <Link to={'/admin/dashboard'}>
                <img /> Logo
            </Link>

            {/* toggle theme */}
            <div onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className= {`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'} `}
            >
                {
                    isDark ? (
                        <Sun className='h-6 w-6 text-yellow-500' />
                    ) : (
                        <Moon className='h-6 w-6 text-blue-500' />
                    )
                }
            </div>

        </div>
    </header>
  )
}

export default Header