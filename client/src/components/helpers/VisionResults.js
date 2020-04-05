import React, { useState, useEffect, useContext } from 'react'
import TransContext from '../../context/transactions/transContext'
import PropTypes from 'prop-types'

const VisionResults = ({ vision }) => {

  const { addTransaction } = useContext(TransContext)

  const [reading, setReading] = useState({
    store: '',
    street: '',
    gallons: '',
    total: '',
    state: '',
    city: ''
  })

  const setText = e => {
    setReading({
      ...reading,
      [e.target.name]: e.target.name === 'total' || 'gallons' ? parseFloat(e.target.value) : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    addTransaction(reading)
  }

  useEffect(() => {
    setReading({
      ...reading,
      store: vision[0],
      street: vision[1]
    })
  }, vision)

  return (
    <div style={{ margin: '5px' }}>
      <h3 style={{textAlign: 'center'}}>Verify Results</h3>
      <form>
        <div className="form-control">
          <label htmlFor="store">
            Store
          </label>
          <input value={reading.store} onChange={e => setText(e)} type="text" placeholder="Enter store name..." className="text" name='store' value={reading.store} />

          <label htmlFor="street address">
            Street Address
          </label>
          <input value={reading.street} onChange={e => setText(e)} type="text" placeholder="Enter street address..." name="street" />
          <label htmlFor="amount">
            Number of gallons
          </label>
          <input onChange={e => setText(e)} type="number" placeholder="Enter number of gallons..." name="gallons" value={reading.gallons}/>
          <label htmlFor="amount">
            Amount
          </label>
          <input onChange={e => setText(e)} type="number" placeholder="Enter total..." name="total" value={reading.total}/>
          <button className="btn" onClick={e => onSubmit(e)}>Add transaction</button>
        </div>
      </form>
    </div>
  )
}

VisionResults.propTypes = {
  vision: PropTypes.array.isRequired,
}

export default VisionResults
