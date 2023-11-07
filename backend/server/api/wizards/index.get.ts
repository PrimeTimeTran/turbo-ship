import { Wizard } from '@/server/models/wizard.model'

export default defineEventHandler(async (e) => {
  const { limit, offset } = e.context
  const data: WizardType[] = await Wizard.find({}).skip(offset).limit(limit)
  return postMiddleware(data as [], e.context, Wizard)
})
