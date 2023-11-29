export default defineEventHandler(async (e) => {
  try {
    const body = await readBody(e)
    const cleansed = WizardSchema.parse(body)
    const wizard = new Wizard(cleansed)
    await wizard.save()

    return { wizard }
  } catch (error) {
    console.log({
      error,
    })
  }
})
