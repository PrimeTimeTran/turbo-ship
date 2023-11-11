import { Wizard } from '@/server/models/wizard.model'

export default defineEventHandler(async (e) => {
  const { limit, offset } = e.context
  const params = getQuery(e)

  const query: Record<string, any> = {}

  for (const key in params) {
    const value = params[key]

    // Info Queries: 1. End user changed input then deleted.
    // That sends empty field which === ''.
    // This results in nothing returned from query.
    // For example wizards where wizard.firstName === '' returns [].
    if (params.hasOwnProperty(key) && value !== '') {
      // Info Queries 2. A list of values. Multiple houses for example.
      if (isArray(params, key)) {
        // Fix Downcase list of items and search using Regex as well
        const values = value!.toString().split(',')
        const regexArray = values.map((value) => new RegExp('^' + value, 'i'))
        query[key] = { $in: regexArray }

        // Info Queries 3. True of false values. True/False wizard has apparition ability.
      } else if (value == 'false' || value == 'true') {
        query[key] = value
      } else {
        // Info Queries 4. Multifacted:
        // - So 'harry' matches 'Harry'
        // - Fuzzy search so "Har" matches "Harry" or "Mary" matches "Mary" & "Mary-Anne"
        const val = value?.toString().toLowerCase()
        query[key] = { $regex: val, $options: 'i' }
      }
    }
  }

  const data: WizardType[] = await Wizard.find(query).skip(offset).limit(limit)

  return postMiddleware(data as [], e.context, Wizard)
})

function isArray(params: Record<string, any>, key: string) {
  return (
    params[key] != undefined &&
    params[key] != null &&
    params[key]!.toString().split(',').length > 1
  )
}
