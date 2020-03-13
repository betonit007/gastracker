import { USER_TRANSACTIONS, DELETE_TRANSACTION } from '../types'

export default (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)
            }
        case USER_TRANSACTIONS:
            return {
                ...state,            
            }
    }
}