import { sendDietForm } from '../services/diet_form'

const set = reqs => {
  return async dispatch => {
    try {
      const res = await sendDietForm(reqs)
      dispatch({
        type: 'SET',
        data: {
          reqs: reqs,
          plans: res,
        }
      })
    } catch(err) {
      // TODO: HANDLE ERRORS
      console.log(err);
    }
  }
}

const empty = () => {
  return {
    type: 'EMPTY',
  }
}

export {
  set, empty
}