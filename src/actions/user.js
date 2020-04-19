const login = (res) => {
  setUserInLocalStorage(res)
  return {
    type: 'LOGIN',
    data: {
      user: {
        name: res.user.name,
        email: res.user.email,
      },
    }
  }
}

const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export {
  login,
  logout,
}