import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { Routes, Route, Navigate } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* <Route element={<Navigate to="/auth/login" replace={true} />} /> */}
    </Routes>
  )
}

export default AuthRouter
