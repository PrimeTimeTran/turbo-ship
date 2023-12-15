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
      { from: 'branch', localField: 'branch' },
    ]

    const pipeline = buildPipeline(query, page, limit, fieldsToPopulate)
    const results = await Transaction.aggregate(pipeline)
    let result = await Transaction.populate(results[0].data, [
      {
        path: 'bank',
        select: '_id',
      },
      {
        path: 'branch',
        select: '_id',
      },
      {
        path: 'user',
        select: '_id',
      },
      {
        path: 'account',
        select: '_id',
      },
    ])
    let { data, totalCount } = results[0]
    let pageCount = 0
    if (!_.isEmpty(totalCount)) {
      totalCount = totalCount[0].total
      pageCount = Math.ceil(parseInt(totalCount[0].total) / limit)
    }
    const response = {
      meta: {
        page,
        pageCount,
        totalCount,
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
