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
  role: {
    type: [String],
  },
  status: {
    type: [String],
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
})

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

Auditor.addHooks(userSchema)
export { userSchema }
export const User = mongoose.model('User', userSchema)
