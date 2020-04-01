import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import TransContext from '../context/transactions/transContext'
import Register from './Register'

const Header = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useContext(AuthContext)
  const { clearTransState } = useContext(TransContext)

  const onSubmit = (e) => {
    e.preventDefault()
    auth.login({ email, password })
  }

  const logout = () => {
    auth.logout()
    clearTransState()
  }
 
  const currentLocation = useLocation()
  const styles = currentLocation.pathname === '/register' ? {display: 'none'} : {}

  return (
    <div className='header' style={styles}>
      <h4 className='underline-header'>FuelOCR</h4>

      {auth.isAuthenticated ?
        (
          <div className="userLoggedIn header" >
            <h1 className='welcome-user'>Welcome {auth.user && auth.user.name}</h1>
            <div className="logout-button">
              <button className='btn' onClick={() => logout()}>Logout</button>
            </div>
          </div>
        )
        :
        (
          !auth.isAuthenticated && !auth.registerPage ?
            (<>
              <form>
                <div className="loginFields">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" className="text" />
                  <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="text" />
                </div>
                <button className="btn" onClick={e => onSubmit(e)}>Login</button>
              </form>
            </>
            )
            :
            <Register />
        )
      }
    </div>
  )
}

export default Header


