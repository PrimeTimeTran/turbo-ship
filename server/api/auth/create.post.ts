export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const u = await User.findOne({ email: body.email })
  if (u) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User already exists',
    })
  }

  const hash = await encryptPassword(body.password)
  const result = await decryptPassword(body.password, hash)

  const user = await new User({
    email: body.email,
    password: hash,
  })

  await user.save()

  const token = await jwtSign({ userId: user._id })
  return {
    user,
    result,
    token,
  }
})
