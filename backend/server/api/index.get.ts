import roles from '../shared/roles'

export default defineEventHandler(async (e) => {
  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
    roles,
  }
})
