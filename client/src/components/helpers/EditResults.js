import React, { useState, useEffect, useContext } from 'react'
import TransContext from '../../context/transactions/transContext'
import PropTypes from 'prop-types'

const EditResults = ({ toggleModal }) => {

  const { selectedTrans } = useContext(TransContext)
  console.log(selectedTrans)
  const { store, street, gallons, total, state, city } = selectedTrans

  const [reading, setReading] = useState({
    store: store,
    street: street,
    gallons: gallons,
    total: total,
    state: state ? state : "",
    city: city ? city: ""
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
    //addTransaction(reading)
    //resetModal()
  }


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
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter number of gallons..." name="gallons" value={reading.gallons}/>
          <label htmlFor="amount">
            Amount
          </label>
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter total..." name="total" value={reading.total}/>
          <button className="btn" onClick={e => onSubmit(e)}>Add transaction</button>
        </div>
      </form>
    </div>
  )
}

EditResults.propTypes = {
  
}

export default EditResults
