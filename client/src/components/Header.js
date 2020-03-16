import React, { useState, useContext } from 'react'
import AuthContext from '../context/auth/authContext'

const Header = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useContext(AuthContext)

  const onSubmit = (e) => {
    e.preventDefault()
    auth.login({ email, password })
  }

  if (auth.isAuthenticated) {
    return (
      <div className="userLoggedIn header" >
        <h1 className='welcome-user'>Welcome {auth.user && auth.user.name}</h1>
        <div className="logout-button">
          <button className='btn' onClick={()=>auth.logout()}>Logout</button>
        </div>
      </div>
    )
  }

  return (
    <div className='header'>
      <h3>FuelOCR</h3>
      <div>
        <form>
          <div className="loginFields">
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" className="text" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder="Password" className="text" />
          </div>
          <button className="btn" onClick={e => onSubmit(e)}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Header


