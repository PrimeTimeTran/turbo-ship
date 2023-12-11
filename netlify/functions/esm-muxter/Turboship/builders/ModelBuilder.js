import path from 'path'
import { camelize, getType, capitalize } from '../helpers.js'

export class ModelBuilder {
  constructor(entities, options) {
    this.entities = entities
    this.options = options
    this.path = this.getModelPath()
  }
  getModelPath() {
    const currentWorkingDir = process.cwd()
    return path.join(currentWorkingDir, 'src', 'Models')
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
          let field = {}
          field = { ...f }
          delete field._id
          if (isEnumerator(field.type)) {
            field.enumerators = {}
            field.enumeratorType = 'string'
            const options = field.options?.split(',')
            if (options) {
              field.options = field.options
              options.forEach((o) => {
                field.enumerators[o] = {
                  val: o,
                  color: null,
                }
              })
            }
          }
          fields[f.name] = field
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
        import { Auditor } from './Audit/Audit'
        `
      }
      return `
      import mongoose, { Schema } from 'mongoose'
      import { Auditor } from './Audit/Audit'
      `
    }
    const buildEntitySchema = () => {
      if (options.typescript) {
        return `export const ${e.label}Schema = z.object({
          ${values}
        })`
      }
      return ''
    }
    const buildZodType = () => {
      if (options.typescript) {
        return `export type ${label}Type = z.infer<typeof ${label}Schema>`
      }
      return ''
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
            Auditor.addHooks(schema)
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
      return `const ${name}Schema = new Schema({
          ${this.buildMongoose(e)}
        })
        Auditor.addHooks(${name}Schema)
        export { ${name}Schema }
        export const ${label} = mongoose.model('${label}', ${name}Schema)
      `
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
      if (isEnumerator(type)) {
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
      case 'Boolean':
        return 'Boolean'
      case 'String':
        return 'String'
      case 'Text':
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
      case 'Decimal':
        return 'Schema.Types.Decimal128'
      case 'Map':
        return 'Map'
      case 'Array':
        return '[]'
      case 'Relation':
        return 'Schema.Types.ObjectId'
    }
  }

  buildMongoose() {
    function buildRequired(required) {
      return `${required != undefined ? `required: ${required},` : ''}`
    }
    const values = []
    for (const f in this.e.fields) {
      const field = this.e.fields[f]
      const { type, required, enumeratorType, relation, name, options } = field
      const fieldName = name || f
      let item
      if (type === 'relation') {
        item = ''
        let relationType = relation.type
        if (relationType === 'mto' || relationType === 'oto') {
          item = `${name}: { type: Schema.Types.ObjectId, ref: '${capitalize(name)}', ${buildRequired(required)} }`
        } else {
          item = `${name}: [{ type: Schema.Types.ObjectId, ref: '${capitalize(name)}' }]`
        }
      } else if (isEnumerator(type)) {
        function getEnumType(t) {
          if (t === 'enumeratorMulti') return `[${capitalize(enumeratorType)}]`
          return capitalize(enumeratorType)
        }
        item = `${fieldName}: {
          ${buildRequired(required)}
          type: ${getEnumType(type)},
          enum: [${options.split(',').map((i) => `"${i}"`)}]
        }`
      } else {
        item = `${fieldName}: {
          type: ${this.getType(capitalize(type))},
          ${this.getType(capitalize(type)) === 'Map' ? 'of: String,' : ''}
          ${buildRequired(required)}
        }`
      }
      values.push(item)
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

function isEnumerator(type) {
  return ['enumerator', 'enumeratorMulti'].includes(type)
}
