import React, { useReducer } from 'react'
import axios from 'axios'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import { SET_ALERT } from '../types'
//import { } from '../types'

const AlertState = props => {
    const initialState = {
        type: '',
        alert: ''
    }

    const [ state, dispatch ] = useReducer(alertReducer, initialState)

     //Load User
     const sendAlert = (message, type='normal') => {
        
        dispatch({
            type: SET_ALERT,
            payload: {message, type}
        })
    }
    
     return (
         <AlertContext.Provider
           value={{
               alert: state.alert,
               type: state.type,
               sendAlert
           }}
           >
               {props.children}
           </AlertContext.Provider>
     )

}

export default AlertState