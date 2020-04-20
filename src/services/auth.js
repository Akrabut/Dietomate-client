import axios from 'axios'

const ENDPOINT = 'http://0.0.0.0:3003/api'

const loginService = async userObject => {
  try {
    const res = await axios.post(`${ENDPOINT}/auth/login`, userObject)
    return res.data
  } catch (err) {
    // handled in component
    return false
  }
}

export {
  loginService,
}