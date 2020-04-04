import React, { useState } from 'react'
import PropTypes from 'prop-types'

const VisionResults = ({ vision }) => {
  
  

  return (
    <div>
      <form>
        <label>
          Name:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

VisionResults.propTypes = {
  vision: PropTypes.array.isRequired,
}

export default VisionResults
