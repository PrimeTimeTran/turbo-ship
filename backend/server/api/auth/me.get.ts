export default defineEventHandler(async (e) => {
  const user = e.context.user
  const token = e.context.token
  return {
    user: user,
  }
})
