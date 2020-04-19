import axios from 'axios'

const ENDPOINT = 'http://0.0.0.0:3003/api'

const loginService = async (userObject) => {
    const res = await axios.post(`${ENDPOINT}/auth/login`, userObject)
    return res.data
}

const signupService = async (userObject) => {
    const res = await axios.post(`${ENDPOINT}/user/register`, userObject)
    return res.data
} 

export {
  loginService,
  signupService,
}