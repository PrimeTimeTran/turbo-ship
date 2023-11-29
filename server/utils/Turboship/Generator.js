import fs from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'

import { ModelBuilder, AdminBuilder } from './builders/index.js'

import { dirName, makeDirRecursive } from './helpers.js'

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
    this.buildAdminGlobalComponents()
  }

  buildRoutes() {
    const routes = frameworkMap[this.options.backend].apiFiles
    this.entities.map((e) => {
      const fullPath = `/tmp/turboship/nuxt/server/API/${e.plural}`
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
      let fullPath = `/tmp/turboship/nuxt/server/models`
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

      let fullPath = `/tmp/turboship/nuxt/components/Admin/${e.label}s`
      makeDirRecursive(fullPath)

      frameworkMap[this.options.backend].adminUIFiles.forEach((fileName) => {
        const content = admin[frameworkMap[this.options.backend].adminBuildMethodMap[fileName]]()
        fs.writeFileSync(`${fullPath}/${fileName}`, content)
      })

      fullPath = `/tmp/turboship/nuxt/pages/Admin/${e.label}s`
      makeDirRecursive(fullPath)

      let content = admin.buildIndexPage()
      fs.writeFileSync(`${fullPath}/index.vue`, content)

      content = admin.buildEntityUseHook()
      fs.writeFileSync(`/tmp/turboship/nuxt/composables/use${capitalize(e.plural)}.${this.options.language}`, content)
    })
    const content = AdminBuilder.buildAside(this.entities)
    fs.writeFileSync(`/tmp/turboship/nuxt/components/Admin/Aside.vue`, content)
  }

  buildAdminGlobalComponents() {
    const fullPath = '/tmp/turboship/nuxt'
    makeDirRecursive(fullPath)

    const sourcePath = path.resolve(dirName, '../../server/utils/Turboship/nuxt')
    const destPath = path.resolve('/tmp/turboship/nuxt')
    fsExtra
      .copy(sourcePath, destPath)
      .then(() => {
        console.log('Files copied successfully!')
      })
      .catch((err) => {
        console.error('Error copying files:', err)
      })
  }
}

const backends = ['nuxt']
