export class Validator {
  static relationTypes = ['otm', 'mto', 'oto', 'mtm']
  static enumTypes: Array<string> = [
    'enumerator',
    'enumeratorMulti',
    'enumerator-multi',
  ]

  static optionalValidators: ValidatorType = {
    boolean: [],
    date: ['required', 'unique'],
    dateTime: ['required', 'unique'],
    enumerator: ['required', 'unique'],
    enumeratorMulti: ['required', 'min', 'max'],
    number: [
      'required',
      'unique',
      'scale',
      'min',
      'max',
      'positive',
      'negative',
    ],
    integer: [
      'required',
      'unique',
      'scale',
      'min',
      'max',
      'positive',
      'negative',
    ],
    decimal: [
      'required',
      'unique',
      'scale',
      'min',
      'max',
      'positive',
      'negative',
      'scale',
    ],
    string: [
      'required',
      'unique',
      'min-length',
      'max-length',
      'email',
      'url',
      'lowercase',
      'uppercase',
    ],
    text: [
      'required',
      'unique',
      'min-length',
      'max-length',
      'email',
      'url',
      'lowercase',
      'uppercase',
    ],
  }

  static requiresValues = [
    'min',
    'max',
    'scale',
    'min-length',
    'max-length',
    'enumerator',
    'enumeratorMulti',
  ]

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
    console.log('minLength', resp)
    return resp
  }
  static ['max-length'](val: any) {
    const resp = !isNaN(val) && val.length > 0
    console.log('Maxlength', resp)
    return resp
  }
  static attributes(entity: Entity) {
    return entity.attributes.filter(
      (a) => !protectedAttributes.includes(a.name)
    )
  }
  static labeledTypes = {
    string: {
      value: 'String',
      label: 'string',
    },
    text: {
      value: 'String',
      label: 'text',
    },
    number: {
      value: 'Number',
      label: 'number',
    },
    decimal: {
      value: 'Decimal',
      label: 'decimal',
    },
    integer: {
      value: 'Integer',
      label: 'integer',
    },
    enumeratorMulti: {
      value: 'enumeratorMulti',
      label: 'enumerator-multi',
    },
    boolean: {
      value: 'Boolean',
      label: 'boolean',
    },
    enumerator: {
      value: 'enumerator',
      label: 'enumerator',
    },
    date: {
      value: 'Date',
      label: 'date',
    },
    dateTime: {
      value: 'DateTime',
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

  static types = [
    'string',
    'text',
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
  number: string[]
  integer: string[]
  decimal: string[]
  string: string[]
  text: string[]
}
