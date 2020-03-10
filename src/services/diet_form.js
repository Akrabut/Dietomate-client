import axios from 'axios'

const ENDPOINT = 'https://webhook.site/1809822f-4c24-45c0-8639-274792004611'

const sendDietForm = async (dietObject) => {
  try {
    const res = await axios.post(ENDPOINT, dietObject)
    return res.data
  } catch (err) {
    // TODO: SHOW IN MODAL
    console.log(err);
  }
}

export {
  sendDietForm,
}