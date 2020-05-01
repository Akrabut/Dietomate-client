import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import planResponseReducer from './reducers/planResponse'

const reducer = combineReducers({
  user: userReducer,
  planResponse: planResponseReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))