import _ from 'lodash'
import { Wizard } from '@/server/models/wizard.model'

export default defineEventHandler(async (e) => {
  let { limit, page } = e.context
  let params = getQuery(e)
  const query = buildQuery(params)
  const pipeline = buildPipeline(query, page, limit)
  const results = await Wizard.aggregate(pipeline)

  const { data, totalCount } = results[0]

  const response = {
    meta: {
      page,
      pageCount: Math.ceil(parseInt(totalCount[0].total) / limit),
      totalCount: totalCount.length > 0 ? totalCount[0].total : 0,
    },
    data,
  }
  return response
})
