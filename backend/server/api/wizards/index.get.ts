import { Wizard } from '@/server/models/wizard.model'

export default defineEventHandler(async (e) => {
  const { limit, offset } = e.context
  // Create query string from url params
  const params = getQuery(e)

  // Create obj to query with.
  const query: Record<string, any> = {}

  for (const key in params) {
    const value = params[key]
    // console.log({
    //   key,
    //   value,
    // })

    // 1. User entered something then removed it resulting empty field which === '' which would result in nothing returned from query.
    if (params.hasOwnProperty(key) && value !== '') {
      // 2. A list of values. Multiple houses for example.
      if (isArray(params, key)) {
        const values = value!.toString().split(',')
        query[key] = { $in: values }

        // 3. True of false values. True/False wizard has apparition ability.
      } else if (value == 'false' || value == 'true') {
        query[key] = value
      } else {
        // 4. Multifacted:
        //    - Cleanse free form text. So that 'harry' matches 'Harry'
        //    - Fuzzy search. "H" matches "Harry" or "Mary" matches "Mary-Anne"
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
