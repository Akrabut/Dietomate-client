const planResponseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'EMPTY':
      return {}
    default:
      return state
  }
}

export default planResponseReducer