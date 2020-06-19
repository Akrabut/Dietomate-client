const singlePlanReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'UNSET':
      return {}
    default:
      return state
  }
}

export default singlePlanReducer