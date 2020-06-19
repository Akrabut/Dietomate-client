import axios from 'axios'

const getPlans = async userId => {
  return axios.get(`http://localhost:3003/api/user/${userId}/plans`)
}

export { getPlans }