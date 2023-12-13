export default defineEventHandler(async (event) => {
  try {
    const data = await Bank.findOne(event.context.params?._id)
      .populate('users')
      .populate('transactions')
      .populate('accounts')
      .exec()
    return await data
  } catch (error) {
    return error
  }
})
