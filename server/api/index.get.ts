export default defineEventHandler(async (e) => {
  console.log({ foo: 'bar' })
  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
  }
})
