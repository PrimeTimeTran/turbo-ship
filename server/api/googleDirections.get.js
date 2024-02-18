import axios from 'axios'
export default defineEventHandler(async (e) => {
  try {
    const query = getQuery(e)
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
      params: {
        origin: query.origin,
        key: process.env.googleAPIKey,
        destination: query.destination,
      },
    })

    return data
  } catch (error) {
    console.error(error)
  }
})
