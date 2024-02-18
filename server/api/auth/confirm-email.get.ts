import { jwtVerify } from '@security/token'
import type { PayloadObj } from '@security/token'

export default defineEventHandler(async (e) => {
  let params = getQuery(e)
  let token: string = params.token as string
  let payload: PayloadObj = jwtVerify(token)
  if (payload !== null && typeof payload === 'object' && 'email' in payload) {
    let go = await User.findOneAndUpdate({ email: payload['email'] }, { $set: { isVerified: true } }, { new: true })
    console.log({
      go,
    })
  }
})
