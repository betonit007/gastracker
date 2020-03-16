import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const Landing = () => {

  const { isAuthenticated, loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser();
  })

  if (isAuthenticated) {
    return (
      <Redirect to='/main' />
    )
  }

  return (
    <div>
      Landing
    </div>
  )
}

export default Landing
