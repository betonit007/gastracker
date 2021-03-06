import { USER_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, CHANGE_DAYS, CLEAR_TRANSSTATE, SINGLE_TRANS, UPDATE_TRANSACTION, SET_LOADING, FINAL_RESULTS } from '../types'

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
                transactions: [action.payload, ...state.transactions] // this way puts most recent transaction at front of array

            }
        case USER_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload.res,
                millisecs: action.payload.millisecs,
                loading: false
            }
        case CHANGE_DAYS:
            return {
                ...state,
                millisecs: action.payload
            }
        case CLEAR_TRANSSTATE:
            return {
                ...state,
                transactions: []
            }
        case SINGLE_TRANS:
            return {
                ...state,
                selectedTrans: action.payload
            }
        case UPDATE_TRANSACTION:
        
            const { _id, store, gallons, total, street, city, state: geoState } = action.payload
            return {
                ...state,
                transactions: state.transactions.map(trans => trans._id === _id ? { ...trans, store, gallons, total, street, city, state:geoState } : trans //had to rename state(NY, NC, etc so it would not interfer in state(data))
                )
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case FINAL_RESULTS:
            return {
                ...state,
                finalResult: action.payload
            }
        default:
            return state
    }
}