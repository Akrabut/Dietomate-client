import axios from 'axios'

// TODO: TEMP WEBHOOK
const ENDPOINT = 'https://webhook.site/8aad391d-4974-4804-97bd-de2a1abafc14'

const sendDietForm = async (dietObject) => {
  try {
    const res = await axios.post(ENDPOINT, dietObject)
    return res.data
  } catch (err) {
    // TODO: SENSIBLE ERROR DISPLAY
    console.log(err)
  }
}

export {
  sendDietForm,
}