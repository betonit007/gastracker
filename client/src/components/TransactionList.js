import React, { useContext, useEffect } from 'react'
import Transaction from './Transaction'
import RadioButtons from './helpers/RadioButtons'
import TransContext from '../context/transactions/transContext'
import AuthContext from '../context/auth/authContext'
import Loading from './helpers/Loading'

const TransactionList = () => {

  const { getUserTransactions, loading, transactions } = useContext(TransContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user && getUserTransactions(user._id)

  }, [user])

  return (
    <div className='transaction-list'>
      <header className='underline-header'>
        <h3>History</h3>
        <RadioButtons user={user && user._id} />
      </header>
      {loading && <Loading />}

      <ul className={`list ${loading && ' fade'}`}>
        {transactions.map(trans => (
          <Transaction key={trans._id} trans={trans} />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
