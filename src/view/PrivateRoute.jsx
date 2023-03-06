import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { StoreContext } from 'context'
import { PATHS } from 'lib'

export const PrivateRoute = ({ ...rest }) => {
  const { isAuthenticated } = useContext(StoreContext)
  return isAuthenticated ? <Outlet/> : <Navigate to={PATHS.login} replace={true}/>
}
