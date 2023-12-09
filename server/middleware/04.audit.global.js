import { Auditor } from '../models/Audit/Audit'

export default defineEventHandler(async (e) => {
  try {
    Auditor.setKey('id', e.context?.user?._id || '1')
    Auditor.setKey('firstName', e.context?.user?.firstName || 'genius')
    Auditor.setKey('email', e.context?.user?.email || 'genius@gmail.com')
  } catch (error) {
    console.log({
      error,
      origin: 'Auditor',
    })
  }
})
