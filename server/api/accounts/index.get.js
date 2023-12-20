import _ from 'lodash'

export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    const fieldsToPopulate = [
      { from: 'users', localField: 'user' },
      // { from: 'banks', localField: 'bank' },
      // { from: 'branches', localField: 'branch' },
      // { from: 'transactions', localField: 'transactions' },
    ]
    const pipeline = buildPipeline(query, page, limit, fieldsToPopulate)
    const results = await Account.aggregate(pipeline)
    let { data, totalCount, pageCount } = results[0]
    if (!_.isEmpty(totalCount)) {
      totalCount = totalCount[0].total
    }

    const response = {
      meta: {
        page,
        pageCount,
        totalCount,
      },
      data,
    }
    return response
  } catch (e) {
    return logger.error(e)
  }
})
