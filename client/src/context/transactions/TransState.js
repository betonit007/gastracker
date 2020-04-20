import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import TransContext from './transContext'
import transReducer from './transReducer'
import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, CHANGE_DAYS, CLEAR_TRANSSTATE, SINGLE_TRANS, UPDATE_TRANSACTION, SET_LOADING, FINAL_RESULTS } from '../types'

const TransState = props => {
  const initialState = {
    transactions: [],
    selectedTrans: {},
    finalResult: {},
    loading: true,
    millisecs: 604800000
  }

  const [state, dispatch] = useReducer(transReducer, initialState)

  //Update transaction 

  const updateTransaction = async (updatedTrans) => {
  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    } 

    try {
      axios.put(`/api/readings/`, updatedTrans, config)
    
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: updatedTrans
      })
      
    } catch (err) {
      console.log(err)
    }
  }

  // Get single transaction from state
  const getSingleTransaction = id => {
    const singleTrans = state.transactions.find(trans => trans._id === id)
    dispatch({
      type: SINGLE_TRANS,
      payload: singleTrans
    })
  }

  //Get Transactions by user
  const getUserTransactions = async (id, millisecs = 604800000) => {  //millisecs = 1 week
    setLoading()

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

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    })
  }

  const formatVisionResponse = reading => {

    for (let i = 0; i <= 3; i++) {
      if (reading[i].indexOf('Sheetz') > -1 || reading[i].indexOf('SHEETZ') > -1) {
        const finalResults = {
          store: reading[0],
          street: reading[2],
          gallons: reading[10],
          total: reading[11],
          state: reading[4],
          city: reading[3]
        }
        console.log(finalResults)
        dispatch({
          type: FINAL_RESULTS,
          payload: finalResults
        })
      }
      if (reading[i].indexOf('Shell') > -1 || reading[i].indexOf('SHELL') > -1) {
        console.log('shell')
      }
      if (reading[i].indexOf('Dans') > -1 || reading[i].indexOf('DANS') > -1) {
        console.log('shell')
      }
    }
  }
  

  return (
    <TransContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        millisecs: state.millisecs,
        selectedTrans: state.selectedTrans,
        finalResult: state.finalResult,
        getUserTransactions,
        deleteTransaction,
        addTransaction,
        clearTransState,
        getSingleTransaction,
        updateTransaction,
        setLoading,
        formatVisionResponse
      }}
    >
      {props.children}
    </TransContext.Provider>
  )
}

export default TransState