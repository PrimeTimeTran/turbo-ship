import roles from '../../shared/roles'
import { jwtSign, jwtVerify } from '../../shared/jwt'

export default defineEventHandler(async (e) => {
  const token = jwtSign({ foo: 'bar' })

  const verfied = jwtVerify(token)

  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
    roles,
    token,
    verfied,
  }
})
