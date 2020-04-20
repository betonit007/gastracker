import React, { useState, useEffect, useContext } from 'react'
import TransContext from '../../context/transactions/transContext'
import PropTypes from 'prop-types'

const VisionResults = ({ vision, resetModal }) => {

  const { addTransaction, formatVisionResponse, finalResult } = useContext(TransContext)

  const [reading, setReading] = useState({
    store: vision.store,
    street: vision.street,
    gallons: vision.gallons,
    total: vision.total,
    state: vision.state,
    city: vision.city
  })

  const setText = e => {
    setReading({
      ...reading,
      [e.target.name]: e.target.value
    })
  }

  const setNumber = e => {
    setReading({
      ...reading,
      [e.target.name]: parseFloat(e.target.value)
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    addTransaction(reading)
    resetModal()
  }
  ///remove useeffect and try putting vision values directly in value fields

  return (
    <div className='modal-margin'>
      <h3 style={{textAlign: 'center'}}>Verify Results</h3>
      <form>
        <div className="form-control">
          <label htmlFor="store">
            Store
          </label>
          <input onChange={e => setText(e)} type="text" placeholder="Enter store name..." className="text" name='store' value={reading.store} />

          <label htmlFor="street address">
            Street Address
          </label>
          <input value={reading.street} onChange={e => setText(e)} type="text" placeholder="Enter street address..." name="street" />
          <label htmlFor="amount">
            Number of gallons
          </label>
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter number of gallons..." name="gallons" value={parseFloat(reading.gallons).toFixed(2)}/>
          <label htmlFor="amount">
            Amount
          </label>
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter total..." name="total" value={parseFloat(reading.total).toFixed(2)}/>
          <button className="btn" onClick={e => onSubmit(e)}>Add transaction</button>
        </div>
      </form>
    </div>
  )
}

VisionResults.propTypes = {
  vision: PropTypes.object.isRequired,
  resetModal: PropTypes.func.isRequired,
}

export default VisionResults
