import { loginService } from '../services/user'
import { setUserInLocalStorage, removeUserFromLocalStorage } from '../helpers/auth'

const login = userObject => {
  return async dispatch => {
    try {
      const res = await loginService(userObject)
      setUserInLocalStorage(res)
      dispatch({
        type: 'LOGIN',
        data: {
          name: res.user.name,
          email: res.user.email,
        }
      })
    } catch (err) {
      // handled in component
      return false
    }
  }
}

const logout = () => {
  removeUserFromLocalStorage()
  return {
    type: 'LOGOUT',
  }
}

export {
  login,
  logout,
}