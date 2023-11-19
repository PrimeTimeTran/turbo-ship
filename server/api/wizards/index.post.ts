export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const cleansed = WizardSchema.parse(body)
  const wizard = new Wizard(cleansed)
  await wizard.save()

  return { wizard }
})
