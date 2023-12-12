import mongoose, { Schema } from 'mongoose'

export const referralEnumerators = {}

export const Referral = mongoose.model('Referral', {
  referrer: {
    type: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  referee: {
    type: { type: Schema.Types.ObjectId, ref: 'User' },
  },
})
