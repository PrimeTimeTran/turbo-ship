// Paid solution?
// https://www.mongodb.com/docs/manual/core/auditing/
export class Auditor {
  static keys = {}
  static getKey(k) {
    return Auditor.keys[k]
  }
  static setKey(k, v) {
    Auditor.keys[k] = v
  }

  static saveId() {}
  static async createEntry(modelName, action, doc) {
    try {
      console.log('Creating an entry')
      const auditLogEntry = await new AuditLog({
        actorId: Auditor.getKey('id'),
        actorEmail: Auditor.getKey('email'),
        actorName: Auditor.getKey('firstName'),
        action,
        collection: modelName,
        documentId: doc._id,
      })
      await auditLogEntry.save()
    } catch (error) {
      console.log({
        error,
      })
    }
  }
}

export function addHooks(schema) {
  schema.pre('save', async function () {
    const modelName = this.constructor.modelName
    await Auditor.createEntry(modelName, 'create', this)
  })
  schema.post('update', async function () {
    const modelName = this.constructor.modelName
    await Auditor.createEntry(modelName, 'update', this)
  })
  schema.post('remove', async function () {
    const modelName = this.constructor.modelName
    await Auditor.createEntry(modelName, 'remove', this)
  })
}
