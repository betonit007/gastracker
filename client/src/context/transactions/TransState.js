import React, { useReducer } from 'react'
import axios from 'axios'
import TransContext from './transContext'
import transReducer from './transReducer'
import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from '../types'

const TransState = props => {
  const initialState = {
    transactions: []
  }


  const [state, dispatch] = useReducer(transReducer, initialState)

  //Get Transactions by user
  const getUserTransactions = async () => {
    console.log('called')
    try {
      const res = await axios.get('/api/readings');
      console.log(res)
      dispatch({
        type: USER_TRANSACTIONS,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
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
        getUserTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {props.children}
    </TransContext.Provider>
  )
}

export default TransState