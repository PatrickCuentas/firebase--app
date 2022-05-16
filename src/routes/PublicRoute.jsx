import PropTypes from 'prop-types'

import { Route, useNavigate } from 'react-router-dom'

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const navigate = useNavigate()

  return (
    <Route
      {...rest}
      element={props =>
        isAuthenticated ? navigate("/auth/login") : <Component {...props} />
      }
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PublicRoute