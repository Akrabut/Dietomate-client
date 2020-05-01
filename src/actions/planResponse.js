import { sendDietForm } from '../services/diet_form'
import { normalizeFoodProperties } from '../helpers/dietForm'

const set = reqs => {
  return async dispatch => {
    try {
      let res = await sendDietForm(reqs)
      normalizeFoodProperties(res)
      console.log(res);
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