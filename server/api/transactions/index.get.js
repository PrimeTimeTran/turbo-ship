import _ from 'lodash'
export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    const fieldsToPopulate = [
      { from: 'users', localField: 'user' },
      { from: 'banks', localField: 'bank' },
      { from: 'accounts', localField: 'account' },
    ]
    const pipeline = buildPipeline(query, page, limit, fieldsToPopulate)
    const results = await Transaction.aggregate(pipeline)
    let { data, totalCount } = results[0]
    let pageCount = 0
    if (!_.isEmpty(totalCount)) {
      pageCount = Math.ceil(parseInt(totalCount[0].total) / limit)
      totalCount = totalCount[0].total
    }

    console.log({
      lalaldata: data,
    })
    const response = {
      meta: {
        page,
        pageCount: pageCount,
        totalCount: totalCount,
      },
      data,
    }
    return response
  } catch (error) {
    console.log({
      error,
    })
  }
})
