import React, { useContext } from 'react'
import TransContext from '../context/transactions/transContext'

const Balance = () => {

    const { transactions } = useContext(TransContext);
    const total = transactions.reduce((acc, trans) => acc + trans.amount, 0).toFixed(2)
    console.log(total);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance
