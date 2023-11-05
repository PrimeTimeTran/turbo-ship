import chalk from 'chalk'

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const wizard = new Wizard({
    firstName: body.firstName,
    lastName: body.firstName,
  })

  await wizard.save()

  return { wizard }
})
