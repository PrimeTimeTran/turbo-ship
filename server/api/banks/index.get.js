import _ from 'lodash'
export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    // Populating is pretty heavy
    const fieldsToPopulate = [
      // { from: 'branches', localField: 'branches' },
      // { from: 'users', localField: 'users' },
      // { from: 'accounts', localField: 'accounts' },
      // { from: 'transactions', localField: 'transactions' },
    ]
    const pipeline = buildPipeline(query, page, limit, fieldsToPopulate)
    const results = await Bank.aggregate(pipeline)
    let { data, pageCount, totalCount } = results[0]
    if (!_.isEmpty(totalCount)) {
      totalCount = totalCount[0].total
    }
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
