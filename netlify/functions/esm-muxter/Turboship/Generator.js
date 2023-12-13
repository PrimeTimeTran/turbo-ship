import { frameworkMap } from './Framework.js'
// import { AdminBuilder } from './builders/AdminBuilder.js'
import { ModelBuilder } from './builders/ModelBuilder.js'

export default class Generator {
  constructor(e, options, zip) {
    this.entities = e
    this.options = options
    this.zip = zip
    this.root = `${this.options.root}${this.options.backend}`
  }

  async buildGenesis() {
    const name = this.options.frameworkName
    if (name === 'nuxt') {
      const routes = frameworkMap[this.options.backend].apiFiles
      buildRoutes(routes, this.entities, this.options, this.zip)
      buildModels(this.entities, this.options, this.zip)
      buildAdminUI(this.entities, this.options, this.zip)
    }
    return this.zip
  }
}

function buildAdminUI(entities, options, zip) {
  let content = frameworkMap[options.backend].buildGlobalMeta(entities)
  let name = `nuxt/utils/Global.js`
  zip.file(name, content + '}')
  // content = AdminBuilder.buildAside(entities)
  // name = `nuxt/components/Admin/Aside.vue`
  // zip.file(name, content)
}

function buildModels(entities, options, zip) {
  const backend = new ModelBuilder(entities, options)
  entities.map((e) => {
    let fullPath = `nuxt/server/models`
    backend.e = e
    const content = backend.buildModel()
    const name = `${fullPath}/${e.label}.model.${options.language}`
    zip.file(name, content)
  })
}

function buildRoutes(routes, entities, options, zip) {
  zip.sync(() => {
    for (let e of entities) {
      const fullPath = `/server/API/${e.plural}`
      for (let r of routes) {
        const fileName = r + options.language
        const content = frameworkMap[options.backend]['apiContent'][r](e.label)
        const name = `nuxt${fullPath}/${fileName}`
        zip.file(name, content)
      }
      zip.generateAsync({ type: 'nodebuffer' }).then((content) => {})
    }
    zip.generateAsync({ type: 'nodebuffer' }).then((content) => {})
  })
}
