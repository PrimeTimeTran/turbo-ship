import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const branchEnumerators = {}

const branchSchema = new Schema({
  location: {
    type: Map,
  },
  opened: {
    type: Date,
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
  },
  manager: {
    type: Map,
  },
  bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
})
Auditor.addHooks(branchSchema)
export { branchSchema }
export const Branch = mongoose.model('Branch', branchSchema)
