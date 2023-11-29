import fs from 'fs'
import Generator from './Generator.js'

export default class Framework {
  constructor(name, entities, options) {
    this.name = name
    this.entities = entities
    this.options = options
    this.options.frameworkName = name
    this.setup()
  }

  setup() {
    const framework = frameworkMap[this.name]
    const root = this.options.root
    // Blocking, but we need these directories to exist.
    // How long would it take a machine to create 10 files realistically? 5 seconds? 10?
    // That's high ball estimate as well.
    try {
      fs.mkdirSync(root, { recursive: true })

      framework.rootDirectories.forEach((dir) => {
        const fullPath = `${root}${this.name}/${dir}`
        try {
          fs.mkdirSync(fullPath, { recursive: true })
          log('Create: ', fullPath, 'yellow')
        } catch (err) {
          // Handle error if needed
        }
      })
    } catch (err) {
      // Handle error if needed
    }
  }

  build() {
    const entities = Object.values(this.entities)
    this.generator = new Generator(entities, this.options)
    this.generator.buildGenesis()
  }
}

export const frameworkMap = {
  nuxt: {
    name: 'nuxt',
    version: '3.8.0',
    rootDirectories: [
      'components',
      'composables',
      'content',
      'layouts',
      'pages',
      'plugins',
      'server',
      'utils',
      // Must be lowercase
      'server/models',
      'server/API',
      // Must be plural
      'server/Utils',
      'components/Admin',
      'components/The/Navbar',
    ],
    adminUIFiles: ['EntityForm.vue', 'Form.vue', 'Table.vue'],
    adminBuildMethodMap: {
      'Form.vue': 'buildForm',
      'Table.vue': 'buildTable',
      'EntityForm.vue': 'buildEntityForm',
    },
    adminGlobals: ['./components/Admin/Form/Field.vue', './components/Admin/Form/Pagination.vue'],
    apiFiles: ['index.get.', 'index.post.', '[_id].delete.', '[_id].get.', '[_id].put.'],
    apiContent: {
      'index.get.': function (label) {
        return `export default defineEventHandler(async (e) => {
          let { limit, page } = e.context
          let params = getQuery(e)
          const query = buildQuery(params)
          const pipeline = buildPipeline(query, page, limit)
          const results = await ${label}.aggregate(pipeline)

          const { data, totalCount } = results[0]

          const response = {
            meta: {
              page,
              pageCount: Math.ceil(parseInt(totalCount[0].total) / limit),
              totalCount: totalCount.length > 0 ? totalCount[0].total : 0,
            },
            data,
          }
          return response
        })
      `
      },
      'index.post.': function (label) {
        return `export default defineEventHandler(async (event) => {
          const body = await readBody(event)
          try {
            return await new ${label}(body).save()
          } catch (error) {
            return error
          }
        })
      `
      },
      '[_id].delete.': function (label) {
        return ` export default defineEventHandler(async (event) => {
          try {
            return await ${label}.findOneAndDelete({ _id: event.context.params?._id })
          }
          catch (error) {
            return error
          }
        })
      `
      },
      '[_id].get.': function (label) {
        return `export default defineEventHandler(async (event) => {
          try {
            return await ${label}.findOne({ _id: event.context.params?._id })
          } catch (error) {
            return error
          }
        })
      `
      },
      '[_id].put.': function (label) {
        return `export default defineEventHandler(async (event) => {
          const body = await readBody(event)
          try {
            return await ${label}.findOneAndUpdate(
              { _id: event.context.params?._id },
              body,
              { new: true }
            )
          } catch (error) {
            return error
              }
        })
      `
      },
    },
  },
  flutter: {
    name: 'flutter',
    version: '3.8.0',
    rootDirectories: ['src'],
  },
}
