import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'

const reducer = combineReducers({
  user: userReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))