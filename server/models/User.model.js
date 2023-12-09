import mongoose, { Schema } from 'mongoose'
import { addHooks } from './Audit/Audit'

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
  owner: {
    type: Boolean,
  },
  netWorth: {
    type: Schema.Types.Decimal128,
  },
})

addHooks(userSchema)
export { userSchema }
export const User = mongoose.model('User', userSchema)
