import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { exec } from 'child_process'

export const __filename = fileURLToPath(import.meta.url)
export const dirName = dirname(__filename)

export const log = (field, val, color = 'green') => console.log(chalk[color](field) + val)

export function fileExt(options) {
  return options.typescript ? 'ts' : 'js'
}

export function writeToFile(name, content) {
  log('Create: ', name)
  fs.writeFile(name, content, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

export const capitalize = (word) => {
  const firstLetter = word.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = word.slice(1)
  const capitalizedWord = firstLetterCap + remainingLetters
  return capitalizedWord
}

export function prettify() {
  process.chdir(path.join(dirName, '../../temp'))

  exec('npx prettier --write "**/*.{ts,js,vue}"', (prettierError, prettierStdout) => {
    if (prettierError) {
      console.error(`Error running prettier: ${prettierError}`)
      return
    }
    log('Cleaned: ', 'by Prettier', 'magenta')
  })
}

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export function getType(name, type, key) {
  switch (type) {
    case 'string':
      return 'z.string()'
    case 'boolean':
      return 'z.boolean()'
    case 'number':
      return 'z.number()'
    case 'number':
      return 'z.number()'
    case 'date':
      return 'z.date()'
    case 'datetime':
      return 'z.string().datetime()'
    case 'enumerator':
      return `z.array(z.nativeEnum(${name}Enumerators.${key}))`
    default:
      break
  }
}

export const colors = [
  'red',
  'pink',
  'purple',
  'green',
  'indigo',
  'blue',
  'teal',
  'yellow',
  'teal',
]

export function makeLowerCase(inputString) {
  return inputString.toLowerCase()
}

export function makeDirRecursive(fullPath) {
  fs.mkdirSync(fullPath, { recursive: true }, (err) => {
    if (err) {
    } else {
      log('Create: ', fullPath, 'yellow')
    }
  })
}
