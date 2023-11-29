import _ from 'lodash'
import mongoose from 'mongoose'

export const blacklistKeys = ['page', 'limit', '_vts']
export const blackListValues = ['', undefined, 'undefined']

export function buildQuery(params: object) {
  const query: Record<string, any> = {}

  for (const key in params) {
    let value = (params as any)[key]

    if (blacklistKeys.includes(key)) continue

    if (blackListValues.includes(value))
      // Info Queries: 1. End user touched input then removed it.
      // That sends empty field which === ''.
      // This results in nothing returned from query.
      // For example wizards where wizard.firstName === '' returns [].
      continue
    value = value?.split('?')[0]
    console.log({
      value,
    })

    if (params.hasOwnProperty(key)) {
      // Info Queries 2. A list of values. Multiple houses for example.
      if (isArray(params, key)) {
        const values = value!.toString().split(',')
        const regexArray = getRegexedValues(values)
        query[key] = { $in: regexArray }

        // Info Queries 3. True of false values. True/False wizard has apparition ability.
      } else if (value == 'false' || value == 'true') {
        query[key] = value
      } else {
        // Info Queries 4. Multifacted:
        // - 1. Type casting matches. So "1" matches 1
        // - 2. Case insensitive matches. So "harry" matches "Harry"
        // - 3. Fuzzy matches. So "Har" matches "Harry" or "Mary" matches "Mary" & "Mary-Anne"
        // - 4. Substring matches. So "arry" matches "Harry" or "ione" matches "Hermione"
        const val = getRegexedValue(value)
        console.log({
          val,
        })
        query[key] = !isNaN(val) ? parseFloat(val) : { $regex: val }
      }
    }
  }
  return query
}

export function buildPipeline(
  query: object,
  page: number,
  limit: number
): mongoose.PipelineStage[] {
  return [
    {
      $facet: {
        data: [
          { $match: query },
          { $skip: (page - 1) * 10 },
          { $limit: limit },
        ],
        totalCount: [{ $match: query }, { $count: 'total' }],
      },
    },
  ]
}

function isArray(params: Record<string, any>, key: string) {
  const value = _.get(params, key)

  return !_.isNil(value) && _.isString(value) && value.split(',').length > 1
}

function getRegexedValue(value: any) {
  const isNumeric = !isNaN(value)

  if (isNumeric) {
    return value
  } else {
    return new RegExp(escapeRegExp(value.toString().toLowerCase()) + '.*', 'i')
  }
}

function getRegexedValues(values: string[]) {
  const regexArray = values.map(getRegexedValue)
  return regexArray
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
