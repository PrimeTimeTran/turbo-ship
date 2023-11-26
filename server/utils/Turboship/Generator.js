import fs from 'fs'
import { ModelBuilder, AdminBuilder } from './builders/index.js'

import { makeDirRecursive } from './helpers.js'

import { frameworkMap } from './Framework.js'

export default class Generator {
  constructor(e, options) {
    this.entities = e
    this.options = options
    this.root = `${this.options.root}${this.options.backend}`
  }

  buildGenesis() {
    if (!backends.includes(this.options.frameworkName)) return
    this.buildRoutes()
    this.buildModels()
    this.buildAdminUI()
  }

  buildRoutes() {
    const routes = frameworkMap[this.options.backend].apiFiles
    this.entities.map((e) => {
      const fullPath = `${this.root}/server/API/${e.plural}`
      makeDirRecursive(fullPath)
      routes.forEach((r) => {
        const fileName = r + this.options.language
        const content = frameworkMap[this.options.backend]['apiContent'][r](e.label)
        fs.writeFileSync(`${fullPath}/${fileName}`, content)
      })
    })
  }

  buildModels() {
    const backend = new ModelBuilder(this.entities, this.options)
    this.entities.map((e) => {
      let fullPath = `${this.root}/server/models`
      backend.e = e
      makeDirRecursive(fullPath)
      const content = backend.buildModel()
      fs.writeFileSync(`${fullPath}/${e.label}.model.${this.options.language}`, content)
    })
  }

  buildAdminUI() {
    this.entities.map(async (e) => {
      const admin = new AdminBuilder(this.entities, this.options)
      admin.e = e

      let fullPath = `${this.root}/components/Admin/${e.plural}`
      makeDirRecursive(fullPath)

      frameworkMap[this.options.backend].adminUIFiles.forEach((fileName) => {
        const content = admin[frameworkMap[this.options.backend].adminBuildMethodMap[fileName]]()
        fs.writeFileSync(`${fullPath}/${fileName}`, content)
      })
      fullPath = `${this.root}/pages/Admin/${e.plural}`
      makeDirRecursive(fullPath)

      let content = admin.buildIndexPage()
      fs.writeFileSync(`${fullPath}/index.vue`, content)

      content = admin.buildEntityUseHook()

      // Had to add this because some async operations weren't completed yet inside of app
      // makeDirRecursive(`${this.root}/composables/`)

      fs.writeFileSync(`${this.root}/composables/use${e.plural}.${this.options.language}`, content)
    })
  }
}

const backends = ['nuxt']
