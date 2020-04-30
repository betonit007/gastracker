import { SET_ALERT } from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                type: action.payload.type,
                alert: action.payload.message
            }
        default: return state
    }
}