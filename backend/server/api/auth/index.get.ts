import { jwtVerify } from '~/server/shared/token'

export default defineEventHandler(async (e) => {
  const token = e.node.req.rawHeaders[1]?.split(' ')[1]

  return {
    verified: jwtVerify(token),
  }
})
