import mongoose, { Schema } from 'mongoose'

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  tenant: { type: Schema.Types.ObjectId, ref: 'Tenant' },
})

export { roleSchema }
export const Role = mongoose.model('Role', roleSchema)
