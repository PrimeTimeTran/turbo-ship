export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const wizard = new Wizard({
    lastName: body.firstName,
    firstName: body.firstName,
  })

  await wizard.save()

  return { wizard }
})
