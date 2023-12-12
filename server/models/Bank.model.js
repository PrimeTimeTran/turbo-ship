import mongoose, { Schema } from 'mongoose'

export const bankEnumerators = {
  creditRating: {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    f: 'f',
  },
}

export const Bank = mongoose.model('Bank', {
  name: {
    type: String,
  },
  ceo: {
    type: String,
  },
  logoURL: {
    type: String,
  },
  creditRating: {
    type: [String],
    enum: ['a', 'b', 'c', 'd', 'f'],
  },
  employeeCount: {
    type: BigInt,
  },
  hq: {
    type: String,
  },
  branches: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
  },
  accounts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  },
  users: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  transactions: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
})
