import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const userEnumerators = {
  role: {
    owner: 'owner',
    admin: 'admin',
    staff: 'staff',
    customer: 'customer',
  },
  status: {
    open: 'open',
    closed: 'closed',
    pending: 'pending',
  },
}

const userSchema = new Schema({
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  sex: {
    type: String,
  },
  dob: {
    type: String,
  },
  zodiacSign: {
    type: String,
  },
  urlAvatar: {
    type: String,
  },
  jobArea: {
    type: String,
  },
  jobDescriptor: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobType: {
    type: String,
  },
  phone: {
    type: String,
  },
  role: {
    type: [String],
  },
  status: {
    type: [String],
  },
  banks: [{ type: Schema.Types.ObjectId, ref: 'Bank' }],
  branches: [{ type: Schema.Types.ObjectId, ref: 'Branch' }],
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
})

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

Auditor.addHooks(userSchema)
export { userSchema }
export const User = mongoose.model('User', userSchema)
