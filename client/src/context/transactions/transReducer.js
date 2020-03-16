import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from '../types'

export default (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ] // this way puts most recent transaction at front of array
                
            }
        case USER_TRANSACTIONS:
            return {
                ...state,            
            }
        default:
            return state

    }
}