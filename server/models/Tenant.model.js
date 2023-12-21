import mongoose, { Schema } from 'mongoose'

const tenantSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  roles: [{ type: Schema.Types.ObjectId, ref: 'role' }],
})

export { tenantSchema }
export const Tenant = mongoose.model('Tenant', tenantSchema)
