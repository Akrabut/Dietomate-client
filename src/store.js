import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { locationReducer } from './reducers/locationReducer'

// const reducer = combineReducers({
//   location: locationReducer,
//   fiveDay: fiveDayReducer,
//   favorites: favoritesReducer,
//   error: errorReducer,
// })

const reducer = combineReducers({
  
})

export const store = createStore(reducer, applyMiddleware(thunk))