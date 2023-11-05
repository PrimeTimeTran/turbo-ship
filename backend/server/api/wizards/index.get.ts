export default defineEventHandler(async (e) => {
  const wizards = await Wizard.find({})
  return {
    wizards,
  }
})
