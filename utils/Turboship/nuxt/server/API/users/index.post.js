export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const user = await User.findOne({ email: body.email })
    if (user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Error: Email taken',
      })
    }

    const hash = await encryptPassword(body.password)
    return await new User({ ...body, passwordDigest: hash }).save()
  } catch (error) {
    return error
  }
})
