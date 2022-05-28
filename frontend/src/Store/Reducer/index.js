import { combineReducers } from 'redux'
import user from './UserReducer'
import error from './ErrorReducer'


export default combineReducers({
    user,
    error
})