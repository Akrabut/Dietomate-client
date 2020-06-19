import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import planResponseReducer from './reducers/planResponse'
import singlePlanReducer from './reducers/singlePlan'

const reducer = combineReducers({
  user: userReducer,
  planResponse: planResponseReducer,
  singlePlan: singlePlanReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))