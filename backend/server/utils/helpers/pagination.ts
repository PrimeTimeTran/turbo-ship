import type { Wizard } from '../../models/wizard.model'
type eventType = {
  page: Number
  limit: Number
  offset: Number
}

export async function postMiddleware(data: [], e: object, type: typeof Wizard) {
  const { page, limit, offset } = e as eventType
  const total = await type.find({})
  return {
    meta: {
      page,
      limit,
      offset,
      total: data.length,
      totalRecords: total.length,
      pageCount: Math.ceil(total.length / Number(limit)),
    },
    data,
  }
}
