import mongoose, { Schema } from 'mongoose'

export const auditLogSchema = new Schema({
  actorId: String,
  actorEmail: String,
  actorName: String,
  action: String,
  collection: String,
  documentId: String,
  timestamp: { type: Date, default: Date.now },
})

export const AuditLog = mongoose.model('AuditLog', auditLogSchema)
