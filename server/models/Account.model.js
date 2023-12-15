import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const accountEnumerators = {
  type: {
    checking: 'checking',
    banking: 'banking',
    credit: 'credit',
    investing: 'investing',
    savings: 'savings',
    home: 'home',
    auto: 'auto',
  },
}

const accountSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  balance: {
    type: Schema.Types.Decimal128,
  },
  bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transactions' }],
  type: {
    type: String,
    enum: [
      'checking',
      'banking',
      'credit',
      'investing',
      'savings',
      'home',
      'auto',
    ],
  },
  accountNumber: {
    type: String,
  },
  routingNumber: {
    type: String,
  },
  branch: { type: Schema.Types.ObjectId, ref: 'Branch' },
})
Auditor.addHooks(accountSchema)
export { accountSchema }
export const Account = mongoose.model('Account', accountSchema)
