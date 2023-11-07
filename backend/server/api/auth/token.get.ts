import roles from '~/server/shared/roles'
import { jwtSign, jwtVerify } from '~/server/shared/token'

export default defineEventHandler(async (e) => {
  const token = jwtSign({ foo: 'bar' })

  const verfied = jwtVerify(token)

  return {
    token,
    verfied,
  }
})
