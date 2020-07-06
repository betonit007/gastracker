import React, { useContext } from 'react'
import authContext from '../context/auth/authContext'

const Alert = () => {

  const { authMessage, dangerMessage } = useContext(authContext)
  
  const styles = {
    border: `1px solid ${dangerMessage && 'red'}`,
    backgroundColor: dangerMessage ?  'rgba(230, 49, 85, 0.9)' : 'rgba(4, 190, 20, 0.7',
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

  console.log(dangerMessage)
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
