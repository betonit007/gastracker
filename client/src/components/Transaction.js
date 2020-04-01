import React, { useContext } from 'react'
import TransContext from '../context/transactions/transContext'

const Transaction = ({ trans }) => {

  const { deleteTransaction } = useContext(TransContext);

  const sign = trans.amount < 0 ? '-' : '+'

  return (
    <>
      <li className={trans.amount < 0 ? 'minus' : 'plus'} key={trans.id}>
        {trans.text} <span>{sign}${Math.abs(trans.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(trans._id)}>x</button>
      </li>
    </>
  )
}

export default Transaction
