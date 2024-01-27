export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const update = {
      amount: body.amount,
      description: body.description,
    }
    var id = event.context.params?._id.split('%20')[0]
    let doc = await Transaction.findOneAndUpdate({ _id: id }, update, { new: true })
    let response = {
      body: doc,
    }
    return response
  } catch (err) {
    logger.debug(err, 'Error in put of transactions')
    return {
      foo: 'bar',
    }
  }
})
