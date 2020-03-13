import React, { useReducer } from 'react'
import TransContext from './transContext'
import transReducer from './transReducer'
import { USER_TRANSACTIONS, DELETE_TRANSACTION } from '../types'

const TransState = props => {
  const initialState = {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -20 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
  }


  const [state, dispatch] = useReducer(transReducer, initialState)

  //Get Transactions
  const getTransactions = async () => {
    dispatch({
      type: USER_TRANSACTIONS,
      payload: state.transactions
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    })
  }

  return (
    <TransContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction
      }}
    >
      {props.children}
    </TransContext.Provider>
  )
}

export default TransState