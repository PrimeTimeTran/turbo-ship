import _ from 'lodash'

export default defineEventHandler(async (e) => {
  const banks = await seedBanks()
  const wizards = await seedWizards()
  return {
    banks,
    wizards,
  }
})
