import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'

const ProtectedRoute = ({children}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const {user} = useAuth()

  if(!user){
      return <Navigate to='/login' state={{path: location.pathname}} />
  }

  return children
}

export default ProtectedRoute