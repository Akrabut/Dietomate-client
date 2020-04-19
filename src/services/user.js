import axios from 'axios'

// TODO: TEMP WEBHOOK
const ENDPOINT = 'http://0.0.0.0:3003/api'

const login = async (userObject) => {
  try {
    const res = await axios.post(`${ENDPOINT}/auth/login`, userObject)
    return res.data
  } catch (err) {
    // error is handled in the component
    return false
  }
}

const signup = async (userObject) => {
  try {
    const res = await axios.post(`${ENDPOINT}/user/register`, userObject)
    return res.data
  } catch (err) {
    // error is handled in the component
    return false
  }
} 

export {
  login,
  signup,
}