import { z } from 'zod'

const schema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
})

export default defineEventHandler(async (e) => {
  // http://localhost:3000/api/users?page=10&limit=10
  // { page: '10', limit: '10' }

  const query = schema.parse(getQuery(e))
  const page = Number(query.page || 1)
  const limit = Number(query.limit || 10)
  let offset = limit * (page - 1) || 0
  offset = page == 1 ? 0 : offset
  e.context.page = page
  e.context.limit = limit
  e.context.offset = offset
})
