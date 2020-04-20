import axios from 'axios'

const ENDPOINT = 'http://0.0.0.0:3003/api'

const signupService = async (userObject) => {
  try {
    const res = await axios.post(`${ENDPOINT}/user/register`, userObject)
    return res.data
  } catch(err) {
    // handled in component
    return false
  }
} 

export {
  signupService,
}