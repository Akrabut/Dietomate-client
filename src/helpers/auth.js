const setUserInLocalStorage = res => {
  window.localStorage.setItem('loggedDietomateUsername', JSON.stringify(res.user.name))
  window.localStorage.setItem('loggedDietomateUserEmail', JSON.stringify(res.user.email))
  window.localStorage.setItem('loggedDietomateUserToken', JSON.stringify(res.user.token))
}

const removeUserFromLocalStorage = () => {
  window.localStorage.removeItem('loggedDietomateUsername')
  window.localStorage.removeItem('loggedDietomateUserEmail')
  window.localStorage.removeItem('loggedDietomateUserToken')
}