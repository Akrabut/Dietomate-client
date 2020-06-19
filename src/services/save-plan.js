import axios from 'axios'

const savePlan = async (planId, userId) => {
  return axios.post(`http://localhost:3003/api/user/${userId}/save-plan`, { planId: planId })
}

export { savePlan }