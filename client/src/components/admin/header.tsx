import React from 'react'
import { useTheme } from '../context/theme-provider'
import { Link } from 'react-router-dom'
import { Bell, Moon, Sun } from 'lucide-react'
import logoDark from '../../assets/dark-mode.png'
import logoLight from '../../assets/light-mode.png'

const Header: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark';
  return (
    <header className=' sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 '>
        <div className='container mx-auto flex h-20 items-center justify-between' >
            <div className='flex gap-4'>
                <Link to={'/admin/dashboard'}>
                    <img src={ isDark ?  logoDark : logoLight} alt='WellnessDesk Logo' className='h-10 sm:h-16' />
                </Link> 
            </div>

            {/* toggle theme */}
            
            <div className='flex justify-center gap-3'>
                <div>
                    <Bell />
                </div>
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

        </div>
    </header>
  )
}

export default Header