import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const transactionEnumerators = {
  status: {
    processing: 'processing',
    complete: 'complete',
    declined: 'declined',
    cancelled: 'cancelled',
    rejected: 'rejected',
  },
}

const transactionSchema = new Schema({
  amount: {
    type: Schema.Types.Decimal128,
  },
  status: {
    type: String,
    enum: ['processing', 'complete', 'declined', 'cancelled', 'rejected'],
  },
  chargeDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  account: { type: Schema.Types.ObjectId, ref: 'Account' },
  branch: { type: Schema.Types.ObjectId, ref: 'Branch' },
  bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
})
Auditor.addHooks(transactionSchema)
export { transactionSchema }
export const Transaction = mongoose.model('Transaction', transactionSchema)
