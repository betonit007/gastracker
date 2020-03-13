import React, { useContext } from 'react'
import Transaction from './Transaction'
import TransContext from '../context/transactions/transContext'

const TransactionList = () => {


  const transContext = useContext(TransContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transContext.transactions.map(trans => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList