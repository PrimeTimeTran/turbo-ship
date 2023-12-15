import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const messageEnumerators = {}

const messageSchema = new Schema({
  body: {
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})
Auditor.addHooks(messageSchema)
export { messageSchema }
export const Message = mongoose.model('Message', messageSchema)
