import PropTypes from 'prop-types'

import { Route, Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate replace to="/auth/login" />}</>
  )
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default PrivateRoute
