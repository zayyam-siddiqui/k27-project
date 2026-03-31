import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavbarProvider from './context/navContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <Stairs>
          <App />
        </Stairs>
      </NavbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
