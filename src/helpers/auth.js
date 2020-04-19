const setUserInLocalStorage = userObject => {
  window.localStorage.setItem('loggedDietomateUsername', JSON.stringify(userObject.user.name))
  window.localStorage.setItem('loggedDietomateUserEmail', JSON.stringify(userObject.user.email))
  window.localStorage.setItem('loggedDietomateUserToken', JSON.stringify(userObject.user.token))
}

const removeUserFromLocalStorage = () => {
  window.localStorage.removeItem('loggedDietomateUsername')
  window.localStorage.removeItem('loggedDietomateUserEmail')
  window.localStorage.removeItem('loggedDietomateUserToken')
}