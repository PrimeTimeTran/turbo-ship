// import User from "@models/User.model.js"
import { User } from "../../models/User.model"
const err = {
  statusCode: 400,
  statusMessage: 'Authentication Error: Email/Password invalid',
}
export default defineEventHandler(async (e) => {
  logger.info({ foo: 'bar' }, 'Auth post')
  const body = await readBody(e)
  const user = await User.findOne({ email: body.email })
  if (!user) throw createError(err)
  const hash = user.passwordDigest
  const validPassword = await decryptPassword(body.password, hash!)
  if (!validPassword) throw createError(err)

  const token = jwtSign({ userId: user._id })

  delete user.passwordDigest

  const response = {
    token,
    user,
  }
  logger.info(response, 'Auth post')
  return response
})
