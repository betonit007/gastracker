import React, { useState, useEffect, useContext } from 'react'
import TransContext from '../../context/transactions/transContext'
import PropTypes from 'prop-types'

const EditResults = ({ toggleModal }) => {

  const { selectedTrans } = useContext(TransContext)
  const { store, street, gallons, total, state, city, _id } = selectedTrans

  const [reading, setReading] = useState({
    store: store,
    street: street,
    gallons: gallons,
    total: total,
    state: state,
    city: city
  })

  const [confirmDelete, setConfirmDelete] = useState(false)

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

  const initiateDelete = e => {
    e.preventDefault()
    setConfirmDelete(!confirmDelete)
  }

  return (
    <div className='modal-margin'>
      <h3 style={{ textAlign: 'center' }}>Edit / Delete</h3>
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
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter number of gallons..." name="gallons" value={reading.gallons} />
          <label htmlFor="amount">
            Amount
          </label>
          <input onChange={e => setNumber(e)} type="number" placeholder="Enter total..." name="total" value={reading.total} />

          {
            confirmDelete ?
              (
                <div className="edit-delete" >
                  <button className="btn btn-delete" style={{margin: '10px 5px 30px 0'}} onClick={e => onSubmit(e)}>Confirm</button>
                  <button className="btn" onClick={e => initiateDelete(e)}>Cancel</button>
                </div>
              )
              :
              (
                <div className="edit-delete" >
                  <button className="btn" onClick={e => onSubmit(e)}>Update</button>
                  <button className="btn btn-delete" onClick={e => initiateDelete(e)}>Delete</button>
                </div>
              )

          }
        </div>
      </form>
    </div>
  )
}

EditResults.propTypes = {

}

export default EditResults
