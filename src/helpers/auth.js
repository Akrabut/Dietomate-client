const setUserInLocalStorage = userObject => {
  localStorage.setItem('loggedDietomateUserId', userObject._id)
  localStorage.setItem('loggedDietomateUsername', userObject.name)
  localStorage.setItem('loggedDietomateUserEmail', userObject.email)
  localStorage.setItem('loggedDietomateUserToken', userObject.token)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('loggedDietomateUserId')
  localStorage.removeItem('loggedDietomateUsername')
  localStorage.removeItem('loggedDietomateUserEmail')
  localStorage.removeItem('loggedDietomateUserToken')
  localStorage.removeItem('loggedDietomateUserReqs')
}

export {
  setUserInLocalStorage,
  removeUserFromLocalStorage,
}