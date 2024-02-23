import _ from 'lodash'
export default defineEventHandler(async (e) => {
  try {
    let { limit, page } = e.context
    let params = getQuery(e)
    const query = buildQuery(params)
    const pipeline = buildPipeline(query, page, limit)
    const results = await User.aggregate(pipeline)

    let { data, totalCount, pageCount } = results[0]
    if (!_.isEmpty(totalCount) && totalCount[0]) {
      totalCount = totalCount.length > 0 ? totalCount[0].total : 0
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
