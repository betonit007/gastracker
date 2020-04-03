import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ percentage }) => {
  
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 style={{ width: `${percentage}%`}}>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
}

export default ProgressBar
