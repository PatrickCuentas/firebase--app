import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/app/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import GridLoader from 'react-spinners/GridLoader'
import { Box } from '@chakra-ui/react'

function App() {
  const auth = getAuth()
  const user = auth.currentUser
  const [isLoggedIn, setisLoggedIn] = useState(user ? true : false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setisLoggedIn(true)
      } else {
        setisLoggedIn(null)
      }
      setLoading(false)
    })
  }, [auth, user])

  if (loading) {
    return (
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GridLoader color="tomato" loading={loading} size={50} />
      </Box>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
          <Route path={'/'} element={<Dashboard />} />
        </Route>
        <Route
          path="auth"
          element={<PublicRoute isAuthenticated={isLoggedIn} />}
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate replace to="/" />
            ) : (
              <Navigate replace to="/auth/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
