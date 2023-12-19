export function replaceWithUnderline(inputString = '', replaceString) {
  try {
    const regex = new RegExp(replaceString, 'g')
    const replacedText = inputString.replace(regex, `<u>${replaceString}</u>`)
    return replacedText
  } catch (error) {
    return inputString
  }
}

export function replaceWithDoubleUnderline(inputString = '', replaceString) {
  try {
    const regex = new RegExp(replaceString, 'g')
    const replacedText = inputString.replace(regex, `<u class='.double-underline'>${replaceString}</u>`)
    return replacedText
  } catch (error) {
    return inputString
  }
}

export const views = {
  sort: 'sort',
  help: 'help',
  feedback: 'feedback',
  entities: 'entities',
  relationships: 'relationships',
}
export const toolBarScreens = ['relationships', 'entities', 'feedback', 'help']
