export const attributeTypes = [
  'string',
  'number',
  'decimal',
  'integer',
  'enumeratorMulti',
  'boolean',
  'enumerator',
  'date',
  'datetime',
]

export const attributeTypesWithLabels = {
  string: {
    value: 'string',
    label: 'string',
  },
  number: {
    value: 'number',
    label: 'number',
  },
  decimal: {
    value: 'decimal',
    label: 'decimal',
  },
  integer: {
    value: 'integer',
    label: 'integer',
  },
  enumeratorMulti: {
    value: 'enumeratorMulti',
    label: 'enumerator-multi',
  },
  boolean: {
    value: 'boolean',
    label: 'boolean',
  },
  enumerator: {
    value: 'enumerator',
    label: 'enumerator',
  },
  date: {
    value: 'date',
    label: 'date',
  },
  datetime: {
    value: 'datetime',
    label: 'datetime',
  },
}
//   { value: 'date', name: 'date' },
//   { value: 'string', name: 'string' },
//   { value: 'number', name: 'number' },
//   { value: 'decimal', name: 'decimal' },
//   { value: 'integer', name: 'integer' },
//   { value: 'boolean', name: 'boolean' },
//   { value: 'enumerator', name: 'enumerator' },
//   { value: 'enumeratorMulti', name: 'enumerator-multi' },
// ]
// export const attributeTypesWithLabels = [
//   { value: 'date', name: 'date' },
//   { value: 'string', name: 'string' },
//   { value: 'number', name: 'number' },
//   { value: 'decimal', name: 'decimal' },
//   { value: 'integer', name: 'integer' },
//   { value: 'boolean', name: 'boolean' },
//   { value: 'enumerator', name: 'enumerator' },
//   { value: 'enumeratorMulti', name: 'enumerator-multi' },
// ]

export const protectedAttributes = ['_id']

export const tabs = ['validations', 'type']
