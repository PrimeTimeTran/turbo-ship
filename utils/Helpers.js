export function replaceWithUnderline(inputString, replaceString) {
  const regex = new RegExp(replaceString, 'g')
  const replacedText = inputString.replace(regex, `<u>${replaceString}</u>`)
  return replacedText
}

export function replaceWithDoubleUnderline(inputString, replaceString) {
  const regex = new RegExp(replaceString, 'g')
  const replacedText = inputString.replace(regex, `<u class='.double-underline'>${replaceString}</u>`)
  return replacedText
}

export const views = {
  sort: 'sort',
  help: 'help',
  feedback: 'feedback',
  entities: 'entities',
  relationships: 'relationships',
}
export const toolBarScreens = ['relationships', 'entities', 'feedback', 'help']
