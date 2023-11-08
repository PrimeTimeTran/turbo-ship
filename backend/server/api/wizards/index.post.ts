import { Wizard } from '@/server/models/wizard.model'

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const cleansed = WizardSchema.parse(body)
  const wizard = new Wizard(cleansed)
  console.log({
    wizard,
  })

  // await wizard.save()

  return { wizard }
})
