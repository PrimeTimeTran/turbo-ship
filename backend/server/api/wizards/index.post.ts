export default defineEventHandler(async (e) => {
  const data = await JSON.parse(await readBody(e))
  const wizard = await new Wizard({
    firstName: data.firstName,
    lastName: data.lastName,
  })
  await wizard.save()
  return { wizard }
})
