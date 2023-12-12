import _ from 'lodash'
export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    const fieldsToPopulate = [
      { from: 'users', localField: 'user' },
      { from: 'banks', localField: 'bank' },
      { from: 'branches', localField: 'branch' },
      { from: 'transactions', localField: 'transactions' },
    ]
    const pipeline = buildPipeline(query, page, limit, fieldsToPopulate)
    const results = await Account.aggregate(pipeline)
    let result = await Account.populate(results[0].data, [
      {
        path: 'user',
        select: '_id',
      },
      {
        path: 'account',
        select: '_id',
      },
      {
        path: 'bank',
        select: '_id',
      },
      {
        path: 'transaction',
        select: '_id',
      },
    ])
    let { data, totalCount } = results[0]
    let pageCount = 0
    if (!_.isEmpty(totalCount)) {
      pageCount = Math.ceil(parseInt(totalCount[0].total) / limit)
      totalCount = totalCount[0].total
    }
    const response = {
      meta: {
        page,
        pageCount: pageCount,
        totalCount: totalCount,
      },
      data,
      result,
    }
    return response
  } catch (error) {
    console.log({
      error,
    })
  }
})
