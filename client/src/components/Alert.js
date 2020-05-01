import React, { useContext } from 'react'
import authContext from '../context/auth/authContext'

const Alert = () => {

  const { authMessage } = useContext(authContext)
  
  const styles = {
    border: `1px solid red`,
    backgroundColor: 'rgba(230, 49, 85, 0.9)',
    width: '80%',
    height: '60px',
    color: 'white',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const container = {
    margin: 'auto',
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }


  return (
    <>
      {authMessage && (
        <div style={container}>
          <div style={styles}>
            {authMessage && authMessage}
          </div>
        </div>
      )
      }
    </>
  )
}

export default Alert
