import React, { useContext, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
    <>
      <div className="register">
        <p>Don't have an account? </p>
        <div>
          <p>
            <Link to='/register'>
              {' '}click here to register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}


export default Landing
