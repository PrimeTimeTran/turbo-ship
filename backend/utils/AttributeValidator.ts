export class AttributeValidator {
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
      'min length',
      'max length',
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

interface Entity {
  attributes: { name: string }[]
}
