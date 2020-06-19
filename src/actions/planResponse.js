import { sendDietForm } from '../services/diet_form'
import { normalizeFoodProperties } from '../helpers/dietForm'

const set = reqs => {
  return async dispatch => {
    try {
      let res = await sendDietForm(reqs)
      normalizeFoodProperties(res)
      dispatch({
        type: 'SET',
        data: {
          reqs: reqs,
          plans: res,
        }
      })
      localStorage.setItem('loggedDietomateUserReqs', JSON.stringify(reqs))
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