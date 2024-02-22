export default defineEventHandler(async (e) => {
  console.log('Hi')
  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
  }
})
