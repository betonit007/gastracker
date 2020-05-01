import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const Register = () => {

  const { register, isAuthenticated, loadUser, error } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  useEffect(() => {
    loadUser()
  })

  if (isAuthenticated) {
    return (
      <Redirect to='/main' />
    )
  }

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('Please enter all fields', 'danger');
    } else if (password !== password2 && password.length > 6) {
      alert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  }

  return (

    <>
      <h3 className='registerH3'>Register</h3>
      <form onSubmit={onSubmit}>
        <div className="">
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="text" required />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="text" required />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="text" required />
          <input value={password2} onChange={e => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" className="text" required />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn'
        />
      </form>
      <Link to="/">
        Return to Main
      </Link>
    </>
  )
}

export default Register
