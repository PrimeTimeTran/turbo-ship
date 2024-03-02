import prettier from 'prettier'
import { frameworkMap } from './Framework.js'
import { ModelBuilder } from './builders/ModelBuilder.js'

export default class Generator {
  constructor(e, options, zip) {
    this.zip = zip
    this.entities = e
    this.options = options
    this.root = `${this.options.root}${this.options.backend}`
  }
  async buildGenesis() {
    const name = this.options.frameworkName
    if (name === 'nuxt') {
      this.buildRoutes()
      this.buildModels()
      this.buildAdminUI()
    }
    return this.zip
  }
  buildAdminUI() {
    try {
      let content = frameworkMap[this.options.backend].buildGlobalMeta(this.entities)
      let name = `nuxt/utils/Global.js`
      this.zip.file(name, content + '}')
    } catch (error) {
      console.log({
        error,
        error: 'Error: buildAdminUI',
      })
    }
  }
  buildModels() {
    try {
      const backend = new ModelBuilder(this.entities, this.options)
      this.entities.map((e) => {
        let fullPath = `nuxt/server/models`
        backend.e = e
        const content = backend.buildModel()
        const formattedContent = prettier.format(content, formatConfig)

        const name = `${fullPath}/${e.label}.model.${this.options.language}`
        this.zip.file(name, formattedContent)
      })
    } catch (error) {
      console.log({
        error,
        error: 'Error: buildModels',
      })
    }
  }
  buildRoutes() {
    this.addFilesToZip()
      .then((content) => {
        console.log('Success!')
      })
      .catch((error) => {
        console.log({
          error,
          error: 'Error: buildRoutes',
        })
      })
  }

  addFilesToZip() {
    for (let e of this.entities) {
      const fullPath = `/server/API/${e.plural}`
      const routes = frameworkMap[this.options.backend].apiFiles
      for (let r of routes) {
        const fileName = r + this.options.language
        const content = frameworkMap[this.options.backend]['apiContent'][r](e.label)
        const formattedContent = prettier.format(content, formatConfig)
        const name = `nuxt${fullPath}/${fileName}`
        this.zip.file(name, formattedContent)
      }
    }

    return this.zip.generateAsync({ type: 'nodebuffer' })
  }
}

const formatConfig = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  trailingComma: 'none',
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  endOfLine: 'auto',
  parser: 'typescript',
}
