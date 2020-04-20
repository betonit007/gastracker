import React from 'react'
import PropTypes from 'prop-types'
import Filler from './Filler'
import './progressBar.css'

const ProgressBar = ({ percentage }) => {

    return (
        <div className='progress-bar'>
           <Filler percentage={percentage}/>
        </div>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
}

export default ProgressBar
