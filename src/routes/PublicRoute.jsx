import PropTypes from 'prop-types'

import { Outlet, Navigate } from 'react-router-dom'

const PublicRoute = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? <Navigate replace to="/" /> : <Outlet />}</>
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default PublicRoute
