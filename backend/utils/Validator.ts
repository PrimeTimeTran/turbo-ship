export class Validator {
  static enums = ['enumerator', 'enumeratorMulti', 'enumerator-multi']
  static optionalValidators = {
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
  // static ['enumerator'](val: any) {
  //   return val.split(',').length > 0
  // }
  // static ['enumeratorMulti'](val: any) {
  //   return val.split(',').length > 0
  // }

  static safeAttributes(entity: Entity) {
    return entity.attributes.filter(
      (a) => !protectedAttributes.includes(a.name)
    )
  }
}

interface Entity {
  attributes: { name: string }[]
}
