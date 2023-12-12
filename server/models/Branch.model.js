import mongoose, { Schema } from 'mongoose'

export const branchEnumerators = {}

export const Branch = mongoose.model('Branch', {
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  manager: {
    type: String,
  },
  accounts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  },
  users: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  transactions: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
  },
  bank: {
    type: { type: Schema.Types.ObjectId, ref: 'Bank' },
  },
})
