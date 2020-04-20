const setUserInLocalStorage = userObject => {
  localStorage.setItem('loggedDietomateUsername', userObject.name)
  localStorage.setItem('loggedDietomateUserEmail', userObject.email)
  localStorage.setItem('loggedDietomateUserToken', userObject.token)
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