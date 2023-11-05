export default defineEventHandler(async (e) => {
  const users = await User.find({})
  return {
    users,
  }
})
