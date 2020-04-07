import React, { useState, useContext } from 'react'
import TransContext from '../context/transactions/transContext'
import EditModal from './helpers/EditModal'

const Transaction = ({ trans }) => {

  const { deleteTransaction, getSingleTransaction } = useContext(TransContext);
  const [modal, toggleModal] = useState(false)

  const getTransToggleModal = id => {
    getSingleTransaction(id)
    toggleModal(true)
  }

  return (
    <>
      { modal && <EditModal deleteTransaction={deleteTransaction} trans={trans} toggleModal={toggleModal}/> }
      <div className='single-transaction' onClick={()=>getTransToggleModal(trans._id)}>
        <li key={trans.id}>
          {trans.store} <span>{trans.total}</span>
        </li>
      </div>
    </>
  )
}

export default Transaction
