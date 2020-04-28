import React from 'react'
import PropTypes from 'prop-types'
import './progressBar.css'

const ProgressBar = ({ percentage }) => {

    return (
        <div className="loading animated fadeIn"  style={{width:`${percentage}%`}}>Loading
            <div className="bg"></div>
        </div>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
}

export default ProgressBar


