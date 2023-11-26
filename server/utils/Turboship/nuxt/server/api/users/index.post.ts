export default defineEventHandler(async (e) => {
  const user = await new User({ firstName: 'Loi', lastName: 'Tran' })
  await user.save()
  return {
    user,
  }
})
