import React from 'react'

const Alert = () => {

    const styles={
        border: `1px solid red`,
        backgroundColor: 'rgba(230, 49, 85, 0.658)',
        position: 'absolute',
        width: '100%',
        height: '30px',
        textAlign: 'center',
        top: '20px'
    }

    return (
        <div style={styles}>
         Alert!!! TEST!!!   
        </div>
    )
}

export default Alert
