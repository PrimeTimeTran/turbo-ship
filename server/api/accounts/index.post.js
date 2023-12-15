export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    return await new Account(body).save()
  } catch (error) {
    return error
  }
})
