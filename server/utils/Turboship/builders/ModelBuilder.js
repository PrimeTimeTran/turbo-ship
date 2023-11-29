import path from 'path'
import { camelize, getType, capitalize } from '../helpers.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export class ModelBuilder {
  constructor(entities, options) {
    this.entities = entities
    this.options = options
    this.path = path.join(__dirname, `../src/Models`)
  }
  buildEntities = () => {
    this.entities.map((e) => {
      this.e = e
      this.buildModel()
    })
  }

  buildTransformation(attributes) {
    const fields = {}
    if (attributes) {
      attributes.forEach((f) => {
        if (f.name !== '_id') {
          fields[f.name] = { ...f }
          delete fields[f.name]._id
          if (f.type === 'enumerator' || f.type === 'enumeratorMulti') {
            fields[f.name].enumeratorType = 'string'
            fields[f.name].enumerators = {}
            const options = f.options?.split(',')
            if (options) {
              options.forEach((o) => {
                fields[f.name].enumerators[o] = {
                  val: o,
                  color: null,
                }
              })
            }
          }
        }
      })
      this.e.fields = fields
      this.e.tableFields = Object.keys(fields)
    }
    return fields
  }

  buildModel = () => {
    const {
      e,
      options,
      e: { name, label, attributes },
    } = this
    let fields
    if (name == 'wizard') {
      fields = this.e.fields
    } else {
      fields = this.buildTransformation(attributes)
    }

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
    return content
  }

  generateFields = (fields, name) => {
    const keys = Object.keys(fields)
    const values = []
    const enumerators = []
    for (const key of keys) {
      const { type, required } = fields[key]
      if (type === 'enumerator' || type === 'enumeratorMulti') {
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

  getType(type) {
    switch (type) {
      case 'Decimal':
        return 'Schema.Types.Decimal128'
      case 'Relation':
        return 'Schema.Types.ObjectId'
      case 'String':
        return 'String'
      case 'Boolean':
        return 'Boolean'
      case 'Date':
        return 'Date'
      case 'DateTime':
        return 'Date'
      case 'Number':
        return 'Number'
      case 'Integer':
        return 'BigInt'
    }
  }

  buildMongoose() {
    const values = []
    if (this.e.name == 'wizard') {
      // console.log({
      //   name: this.e.name,
      //   fields: this.e.fields,
      // })
    }
    for (const f in this.e.fields) {
      const field = this.e.fields[f]
      const { type, required, enumeratorType, relation, name } = field
      if (type === 'relation') {
        let item
        if (field.relation.type === 'otm') {
          item = `${name}: {
            ${required != undefined ? `required: ${required},` : ''}
            type: [{ type: Schema.Types.ObjectId, ref: "${relation.name}" }],
          }`
        } else if (field.relation.type === 'mto') {
          item = `${name}: {
            ${required != undefined ? `required: ${required},` : ''}
            type: { type: Schema.Types.ObjectId, ref: "${relation.name}" },
          }`
        }
        values.push(item)
      } else if (type == 'enumerator' || type == 'enumeratorMulti') {
        const item = `${name}: {
          ${required != undefined ? `required: ${required},` : ''}
          type: [
            ${capitalize(enumeratorType)}
          ],
        }`
        values.push(item)
      } else {
        if (this.e.name == 'wizard') {
          console.log({
            name,
            field,
            f,
          })
        }
        const item = `${name || f}: {
          type: ${this.getType(capitalize(type))},
          ${required != undefined ? `required: ${required},` : ''}
        }`
        values.push(item)
      }
    }
    if (this.e.name == 'wizard') {
      // console.log({
      //   values,
      // })
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
}
