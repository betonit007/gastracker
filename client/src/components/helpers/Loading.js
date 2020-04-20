import React from 'react'
import loadingPhoto from '../imgs/loading.gif'

const Loading = () => {
    return (
        <div className='loading-gif'>
          <img src={loadingPhoto} alt="Loading" />
        </div>
    )
}

export default Loading
