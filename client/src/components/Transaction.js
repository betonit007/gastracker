import React, { useContext } from 'react'
import TransContext from '../context/transactions/transContext'

const Transaction = ({ trans }) => {
  console.log(trans)
  const { deleteTransaction } = useContext(TransContext);

  const sign = trans.total < 0 ? '-' : '+'

  return (
    <>
      <li className={trans.amount < 0 ? 'minus' : 'plus'} key={trans.id}>
        {trans.store} <span>{sign}${Math.abs(trans.total)}</span><button className="delete-btn" onClick={() => deleteTransaction(trans._id)}>x</button>
      </li>
    </>
  )
}

export default Transaction
