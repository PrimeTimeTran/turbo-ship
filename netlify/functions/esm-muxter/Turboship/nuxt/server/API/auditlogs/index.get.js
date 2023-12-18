import _ from 'lodash'

export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    const pipeline = buildPipeline(query, page, limit)
    const results = await AuditLog.aggregate(pipeline)

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
  } catch (error) {
    console.log({
      error,
    })
  }
})
