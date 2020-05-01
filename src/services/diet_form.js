import axios from 'axios'

// TODO: TEMP WEBHOOK
const ENDPOINT = 'http://localhost:3003/api/plan/generate-from-requirements'
// const ENDPOINT = 'https://webhook.site/ebe63c66-71b4-417c-8ce7-612f61b03fda'

const sendDietForm = async (dietObject) => {
    const res = await axios.post(ENDPOINT, dietObject)
    return res.data
}

export {
  sendDietForm,
}