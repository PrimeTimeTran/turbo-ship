import _ from 'lodash'

export default defineEventHandler(async (e) => {
  let banks = await seedBanks()
  let wizards = await seedWizards()
  return {
    banks,
    wizards,
  }
})
