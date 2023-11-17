export const attributeTypes = [
  'string',
  'number',
  'decimal',
  'integer',
  'boolean',
  'enumeratorMulti',
  'enumerator',
  'date',
  'dateTime',
  'otm',
  'mto',
  'oto',
  'mtm',
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
  dateTime: {
    value: 'dateTime',
    label: 'date-time',
  },
  otm: {
    value: 'otm',
    label: 'one-to-many',
  },
  mto: {
    value: 'mto',
    label: 'many-to-one',
  },
  oto: {
    value: 'oto',
    label: 'one-to-one',
  },
  mtm: {
    value: 'mtm',
    label: 'many-to-many',
  },
}

export const protectedAttributes = ['_id']

export const tabs = ['validations', 'dataTypes']