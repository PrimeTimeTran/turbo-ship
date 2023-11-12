import _ from 'lodash'

export default defineEventHandler(async (e) => {
  const response = await Wizard.deleteMany({})
  return {
    wizards: 'Done',
  }
})
