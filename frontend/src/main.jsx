import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Testauth from './pages/testauth.jsx'
// import Sidebar from './components/Sidebar.jsx'
import Testroute from './pages/Testroute.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <Testroute />
  </BrowserRouter>
  </StrictMode>,
)
