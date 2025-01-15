
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './AppRoutes'
import { ThemeProvider } from './components/context/theme-provider'

function App() {

  return (
    <div>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App
