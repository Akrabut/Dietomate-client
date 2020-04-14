import axios from 'axios'

// TODO: TEMP WEBHOOK
const ENDPOINT = 'https://webhook.site/1809822f-4c24-45c0-8639-274792004611'

const login = async (userObject) => {
  try {
    const res = await axios.post(ENDPOINT, userObject)
    return res.data
  } catch (err) {
    // TODO: SENSIBLE ERROR DISPLAY
    console.log(err)
  }
}

export {
  login,
}