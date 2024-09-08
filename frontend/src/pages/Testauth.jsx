import { Route, Routes } from 'react-router-dom'
import FloatingShape from "../components/FloatingShape.jsx"
import SignUp from './authentication/SignUp.jsx'
import Login from './authentication/Login.jsx'
import EmailVerif from './authentication/EmailVerif.jsx'
import ResetPassword from './authentication/ResetPassword.jsx'
import ForgotPassword from './authentication/ForgotPassword.jsx'

function Testauth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-500 to-red-900 flex items-center justify-center relative overflow-hidden">
      
    <FloatingShape color='bg-red-500' size ='w-64 h-64' top='-5%' left='10%' delay={0} />
    <FloatingShape color='bg-red-500' size ='w-48 h-48' top='70%' left='80%' delay={5} />
    <FloatingShape color='bg-red-500' size ='w-32 h-32' top='40%' left='-10%' delay={2} />

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/emailverif' element={<EmailVerif />} />
    </Routes>
    </div>
  )
}

export default Testauth