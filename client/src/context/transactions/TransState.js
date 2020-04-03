import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import TransContext from './transContext'
import transReducer from './transReducer'
import AuthContext from '../auth/authContext'
import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, CHANGE_DAYS, CLEAR_TRANSSTATE } from '../types'

const TransState = props => {
  const initialState = {
    transactions: [],
    loading: true,
    millisecs: 604800000
  }

  const [state, dispatch] = useReducer(transReducer, initialState)
  const { user } = useContext(AuthContext)

  //Get Transactions by user
  const getUserTransactions = async (id, millisecs = 604800000) => {  //millisecs = 1 week
    
    try {
      const res = await axios.get(`/api/readings/${id}/${millisecs}`);
      dispatch({
        type: USER_TRANSACTIONS,
        payload: {res: res.data, millisecs} 
      })
    } catch (err) {
      console.error(err)
    }
  }

  const addTransaction = async transaction => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //const body = JSON.stringify({ name, email, password })

    try {
      const res = await axios.post('/api/readings', transaction, config);
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data
      })
    } catch (err) {
      console.error(err)
    }
  }


  const deleteTransaction = async id => {
    
    try {

      await axios.delete(`/api/readings/${id}`)
      
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id
      })

    } catch (error) {
      console.error(error)
    }

  }

  const clearTransState = () => {

    dispatch({
      type: CLEAR_TRANSSTATE
    })
  }
  

  return (
    <TransContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        millisecs: state.millisecs,
        getUserTransactions,
        deleteTransaction,
        addTransaction,
        clearTransState
      }}
    >
      {props.children}
    </TransContext.Provider>
  )
}

export default TransState