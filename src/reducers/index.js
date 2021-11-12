import { combineReducers } from 'redux'
import BasketReducer from './basketReducer'

const rootReducer = combineReducers({
    basket: BasketReducer,
})

export default rootReducer
