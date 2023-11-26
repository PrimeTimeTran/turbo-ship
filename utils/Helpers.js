function validate(e, val) {
  const input = e.target.value
  if (input.length === 0) {
    val.valid = false
  }
  const isEnum = Validator.enumTypes.includes(val.name)
  if (isEnum) {
    const result = input.split(',').length > 0
    if (result) {
      val.valid = true
    }
  } else if (Validator.optionalValidators[val.name](input)) {
    val.valid = true
  } else {
    val.valid = false
  }
}

export function replaceWithUnderline(inputString, replaceString) {
  const regex = new RegExp(replaceString, 'g')
  const replacedText = inputString.replace(regex, `<u>${replaceString}</u>`)
  return replacedText
}

export const views = {
  sort: 'sort',
  help: 'help',
  feedback: 'feedback',
  entities: 'entities',
  relationships: 'relationships',
}