export default defineEventHandler(async (e) => {
  const token = jwtSign({ foo: 'bar' })

  const verfied = jwtVerify(token)

  return {
    token,
    verfied,
  }
})
