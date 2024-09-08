import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Authentication from './pages/Authentication'
// import Sidebar from './components/Sidebar.jsx'
// import SidebarPage from './pages/SidebarPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <App/>
  </BrowserRouter>
  </StrictMode>,
)
