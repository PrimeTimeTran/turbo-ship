export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  const user = await User.findOne({ email: body.email })
  console.log({
    body,
    user,
  })
  return {
    token: 'bar',
    user: user,
  }
})
