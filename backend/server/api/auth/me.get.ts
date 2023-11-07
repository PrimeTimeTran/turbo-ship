export default defineEventHandler(async (e) => {
  return {
    user: e.context.user,
  }
})
