import { setUserInLocalStorage, removeUserFromLocalStorage } from '../helpers/auth'

const login = userObject => {
  setUserInLocalStorage(userObject)
  return {
    type: 'LOGIN',
    data: {
      name: userObject.name,
      email: userObject.email,
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