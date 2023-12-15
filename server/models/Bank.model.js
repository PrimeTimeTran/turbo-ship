import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const bankEnumerators = {
  creditRating: {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    f: 'f',
  },
}

const bankSchema = new Schema({
  name: {
    type: String,
  },
  founded: {
    type: Date,
  },
  ceo: {
    type: String,
  },
  logoURL: {
    type: String,
  },
  creditRating: {
    type: String,
    enum: ['a', 'b', 'c', 'd', 'f'],
  },
  employeeCount: {
    type: BigInt,
  },
  hq: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
})
Auditor.addHooks(bankSchema)
export { bankSchema }
export const Bank = mongoose.model('Bank', bankSchema)
