import roles from '../../shared/roles'
import { jwtVerify } from '../../shared/jwt'

export default defineEventHandler(async (e) => {
  const query = getQuery(e)
  const token = e.node.req.rawHeaders[1].split(' ')[1]

  return {
    roles,
    wizards: ['Harry', 'Hermione', 'Ron'],
    query,
    token,
    verified: jwtVerify(token),
  }
})
