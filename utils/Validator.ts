export class Validator {
  static types = [
    'boolean',
    'string',
    'text',
    'integer',
    'decimal',
    'date',
    'dateTime',
    'array',
    'map',
    'enumerator',
    'enumeratorMulti',
    'otm',
    'mto',
    'oto',
    'mtm',
  ]
  static relationTypes = ['otm', 'mto', 'oto', 'mtm']
  static enumTypes: Array<string> = ['enumerator', 'enumeratorMulti', 'enumerator-multi']
  static requiresValues = ['min', 'max', 'scale', 'min-length', 'max-length', 'enumerator', 'enumeratorMulti']
  static optionalValidators: ValidatorType = {
    boolean: [],
    string: ['required', 'unique', 'min-length', 'max-length', 'email', 'url', 'lowercase', 'uppercase'],
    text: ['required', 'unique', 'min-length', 'max-length', 'email', 'url', 'lowercase', 'uppercase'],
    // number: ['required', 'unique', 'scale', 'min', 'max', 'positive', 'negative'],
    integer: ['required', 'unique', 'scale', 'min', 'max', 'positive', 'negative'],
    decimal: ['required', 'unique', 'scale', 'min', 'max', 'positive', 'negative', 'scale'],
    date: ['required', 'unique'],
    dateTime: ['required', 'unique'],
    array: [],
    map: [],
    enumerator: ['required', 'unique'],
    enumeratorMulti: ['required', 'min', 'max'],
  }
  static min(val: any) {
    return !isNaN(val)
  }
  static max(val: any) {
    return !isNaN(val)
  }
  static scale(val: any) {
    return !isNaN(val)
  }
  static ['min-length'](val: any) {
    const resp = !isNaN(val) && val.length > 0
    return resp
  }
  static ['max-length'](val: any) {
    const resp = !isNaN(val) && val.length > 0
    return resp
  }
  static attributes(entity: Entity) {
    return entity.attributes.filter((a) => !Type.protected.includes(a.name))
  }
  static labeledTypes = {
    boolean: {
      value: 'boolean',
      label: 'boolean',
    },
    string: {
      value: 'string',
      label: 'string',
    },
    text: {
      value: 'text',
      label: 'text',
    },
    integer: {
      value: 'integer',
      label: 'integer',
    },
    decimal: {
      value: 'decimal',
      label: 'decimal',
    },
    date: {
      value: 'date',
      label: 'date',
    },
    dateTime: {
      value: 'dateTime',
      label: 'date-time',
    },
    array: {
      value: 'array',
      label: 'array',
    },
    map: {
      value: 'map',
      label: 'map',
    },
    enumerator: {
      value: 'enumerator',
      label: 'enumerator',
    },
    enumeratorMulti: {
      value: 'enumeratorMulti',
      label: 'enumerator-multi',
    },
    otm: {
      value: 'otm',
      label: 'one-to-many',
    },
    relation: {
      value: 'relation',
      label: 'Relation',
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
}

interface Entity {
  attributes: { name: string }[]
}

interface ValidatorType {
  boolean: []
  date: string[]
  dateTime: string[]
  enumerator: string[]
  enumeratorMulti: string[]
  // number: string[]
  integer: string[]
  decimal: string[]
  string: string[]
  text: string[]
  array: string[]
  map: string[]
}
