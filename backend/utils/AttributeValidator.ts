export class AttributeValidator {
  static list = {
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
  }

  static number() {
    return ['required', 'unique', 'scale', 'min', 'max', 'positive', 'negative']
  }
  static integer() {
    return ['required', 'unique', 'scale', 'min', 'max', 'positive', 'negative']
  }
  static decimal() {
    return [
      'required',
      'unique',
      'scale',
      'min',
      'max',
      'positive',
      'negative',
      'scale',
    ]
  }

  static boolean() {
    return []
  }

  static enumerator() {
    return ['required', 'unique']
  }
  static enumeratorMulti() {
    return ['required', 'min', 'max']
  }
  static date() {
    return ['required', 'unique']
  }
  static dateTime() {
    return ['required', 'unique']
  }

  static string() {
    return [
      'required',
      'unique',
      'min-length',
      'max-length',
      'email',
      'url',
      'lowercase',
      'uppercase',
    ]
  }
  static safeAttributes(entity: Entity) {
    return entity.attributes.filter(
      (a) => !protectedAttributes.includes(a.name)
    )
  }
}

export const validationFields = {
  required: {
    value: null,
    requiresValue: false,
  },
  positive: {
    value: null,
    requiresValue: false,
  },
  negative: {
    value: null,
    requiresValue: false,
  },
  unique: {
    value: null,
    requiresValue: false,
  },
  email: {
    value: null,
    requiresValue: false,
  },
  lowercase: {
    value: null,
    requiresValue: false,
  },
  uppercase: {
    value: null,
    requiresValue: false,
  },
  url: {
    value: null,
    requiresValue: false,
  },
  min: {
    value: null,
    requiresValue: true,
  },
  max: {
    value: null,
    requiresValue: true,
  },
  scale: {
    value: null,
    requiresValue: true,
  },
  'min-length': {
    value: null,
    requiresValue: true,
  },
  'max-length': {
    value: null,
    requiresValue: true,
  },
}

interface Entity {
  attributes: { name: string }[]
}
