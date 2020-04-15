const login = (username, password) => {
  return {
    type: 'LOGIN',
    data: {
      username: username,
      password: password,
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