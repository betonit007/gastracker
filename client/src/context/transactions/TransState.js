import React, { useReducer } from 'react'
import TransContext from './transContext'
import transReducer from './transReducer'
import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from '../types'

const TransState = props => {
  const initialState = {
    transactions: []
  }


  const [state, dispatch] = useReducer(transReducer, initialState)

  //Get Transactions
  const getTransactions = async () => {
    dispatch({
      type: USER_TRANSACTIONS,
      payload: state.transactions
    })
  }

  const addTransaction = transaction => {
 
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
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
        deleteTransaction,
        addTransaction
      }}
    >
      {props.children}
    </TransContext.Provider>
  )
}

export default TransState