import React, { useContext } from 'react'
import TransContext from '../context/transactions/transContext'
import Loading from './helpers/Loading'

const Balance = () => {

    const { transactions, loading } = useContext(TransContext);
    const total = transactions.reduce((acc, trans) => acc + trans.total, 0).toFixed(2)
  
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{loading ? 'Loading...' : `$${total}`}</h1>
        </>
    )
}

export default Balance
