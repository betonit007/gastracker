import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, CHANGE_DAYS, CLEAR_TRANSSTATE } from '../types'

export default (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans._id !== action.payload)
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ] // this way puts most recent transaction at front of array
                
            }
        case USER_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
                loading: false            
            }
        case CHANGE_DAYS:
            return {
                ...state,
                millisecs: state.millisecs === 604800000 ? 2592000000 : 604800000
            }
        case CLEAR_TRANSSTATE:
            return {
                ...state,
                transactions: []
            }
        default:
            return state

    }
}