import path from 'path'
// import { fileExt, camelize, getType, writeToFile, capitalize, dirName } from '../helpers.js'
import { fileExt, camelize, getType, capitalize, dirName } from '../helpers.js'

export class ModelBuilder {
  constructor(entities, options) {
    this.entities = entities
    this.options = options
    this.path = path.join(dirName, `../src/Models`)
    // this.path = path.join(dirName, '../src', this.options.name + '/turbo')
    // console.log({
    //   path: path.join(dirName, '../src', this.options.name + '/turbo'),
    // })
  }

  buildEntities = () => {
    this.entities.map((e) => {
      this.e = e
      this.buildModel()
    })
  }

  buildModel = () => {
    const {
      e,
      options,
      e: { name, label, fields },
    } = this

    const [values, enumerators] = this.generateFields(fields, name)

    const buildImports = () => {
      if (options.typescript) {
        return `
        import { z } from 'zod'
        import { Model, Document } from 'mongoose'
        import { defineMongooseModel } from '#nuxt/mongoose'
        `
      }
      return `
      import mongoose, { Schema } from 'mongoose'
      `
    }

    const buildEntitySchema = () => {
      if (!options.typescript) return ''
      return `export const ${e.label}Schema = z.object({
        ${values}
      })`
    }

    const buildZodType = () => {
      if (!options.typescript) return ''
      return `export type ${label}Type = z.infer<typeof ${label}Schema>`
    }

    const buildNuxtMongoose = () => {
      if (options.typescript) {
        return `
        type Combined = ${label}Type & typeof Model & Document
        const ${name}: ${label}Type = {}
        export const ${label} = defineMongooseModel('${label}', {
          name: '${label}',
          schema: { ...${name} },
          options: {},
          hooks(schema) {
            schema.pre('find', function (this: Combined, next) {
              console.log('${label} hook pre find')
              next()
            })
            schema.post('find', function (docs, next) {
              console.log('${label} hook post find')
              next()
            })
          },
        })`
      }
      return `export const ${label} = mongoose.model('${label}', {
        ${this.buildMongoose(e)}
      })`
    }

    const content = `
    ${buildImports()}
    ${this.buildEnumerators(name, enumerators)}
    ${buildEntitySchema()}
    ${buildZodType()}
    ${buildNuxtMongoose()}
    `
    // writeToFile(`${this.path}/${e.label}.${fileExt(this.options)}`, content)
    return content
  }

  generateFields = (fields, name) => {
    const keys = Object.keys(fields)
    const values = []
    const enumerators = []
    for (const key of keys) {
      const { type, required } = fields[key]
      if (type === 'enumerator') {
        let strings
        if (typeof fields[key].enumerators[0] !== 'string') {
          strings = Object.keys(fields[key].enumerators).map((k) => k)
        }
        enumerators.push({
          key,
          enumerators: strings || fields[key].enumerators,
        })
      }
      values.push(`${camelize(key)}: ${getType(name, type, key)}${!required ? '.optional()' : ''}`)
    }
    return [values, enumerators]
  }

  buildMongoose() {
    const values = []
    for (const field in this.e.fields) {
      // [ ] Add document array & one-to-many support
      // [ ] Add document array & many-to-many support
      const { type, required, enumeratorType } = this.e.fields[field]
      if (type == 'enumerator') {
        // Primitive
        const item = `${field}: {
          required: ${required != undefined ? required : 'False'},
          type: [
            ${capitalize(enumeratorType)}
          ],
        }`

        // [ ] Sub-document
        values.push(item)
      } else {
        const item = `${field}: {
          type: ${capitalize(type)},
          required: ${required != undefined ? required : 'false'}
        }`
        values.push(item)
      }
    }
    return values.join(',')
  }

  buildEnumerators = (name, items) => {
    const enumeratorKeys = []
    for (const obj of items) {
      const strings = []
      for (const key in obj.enumerators) {
        const safe = Object.hasOwnProperty.call(obj.enumerators, key)
        if (safe) {
          const element = obj.enumerators[key]
          strings.push(`${element}: '${element}'`)
        }
      }
      let string = `
        ${obj.key}: {
          ${strings.join(',')}
        },
      `
      enumeratorKeys.push(string)
    }

    let keyValue = `export const ${name}Enumerators = {
    ${enumeratorKeys.join('')}
  }`

    return keyValue
  }

  generateBarrelFile() {
    const { typescript } = this.options
    const exports = []

    for (const model of this.entities) {
      const { label } = model
      const path = `./${label}${!typescript ? '.js' : ''}`
      const line = `export { ${label} } from '${path}'\n`
      exports.push(line)
    }

    const content = `${exports.join('')}`
    const path = `${this.options.path}index.${fileExt(this.options)}`
    // writeToFile(path, content)
  }
}
