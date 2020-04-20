const setUserInLocalStorage = userObject => {
  localStorage.setItem('loggedDietomateUsername', userObject.user.name)
  localStorage.setItem('loggedDietomateUserEmail', userObject.user.email)
  localStorage.setItem('loggedDietomateUserToken', userObject.user.token)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('loggedDietomateUsername')
  localStorage.removeItem('loggedDietomateUserEmail')
  localStorage.removeItem('loggedDietomateUserToken')
}

export {
  setUserInLocalStorage,
  removeUserFromLocalStorage,
}