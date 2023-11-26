import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { program } from 'commander'

import Framework from './Framework.js'
// import seedEntities from './SeedEntities.js'
import seeds from '../../../utils/seeds/seeds'
import { log, dirName, prettify } from './helpers.js'

export class Turboship {
  supportedFrameworks = ['flutter', 'nuxt', 'react-native']
  constructor(root, entities) {
    this.entities = {}
    this.options = this.options()
    this.options.root = root
    this.buildEntities(entities)
    this.setupFrameworks()
    this.report()
  }

  options() {
    program
      .option('-d, --debug', 'output extra debugging')
      .option('-l, --language <type>', 'language choice', 'js')
      .option('-b, --backend <type>', 'backend choice', 'nuxt')
      .option('-m, --mobile <type>', 'mobile choice', 'flutter')
      .option('-e, --entities <letters...>', 'entities included', 'user')

    program.parse(process.argv)

    return program.opts()
  }

  static async cleanse(root) {
    const directories = ['nuxt', 'flutter', 'rn']
    for (const directory of directories) {
      try {
        await fs.promises.rm(path.join(root, directory), { recursive: true })
        log('Cleansed: ', directory, 'magentaBright')
      } catch (error) {
        console.log({
          error,
        })
        // Handle error if needed
      }
    }
  }

  buildEntities(entities) {
    const entityTemplates = ['mint', 'bank', 'lms', 'social', 'pm', 'customer']
    const keys = Object.values(this.options.entities)

    const chosen = keys.filter((k) => entityTemplates.includes(k))
    chosen.forEach((name) => {
      const collection = seeds[name]
      collection.forEach((e) => {
        this.entities[e.name] = e
      })
    })

    entities.forEach(e => {
      this.entities[e.name] = e
    })
  
    // console.log({
    //   parsedData: entities,
    //   parsedDataOne: entities[0],
    //   entities: this.entities,
    // })
  }

  setupFrameworks() {
    const keys = [this.options.backend, this.options.mobile]
    const frameworks = keys.filter((k) => this.supportedFrameworks.includes(k))
    frameworks.forEach((framework) => {
      const fw = new Framework(framework, this.entities, this.options)
      fw.build()
    })
  }

  report() {
    const options = program.opts()
    console.log('\n\n')
    if (options.debug) console.log(options)
    console.log('\n\n')
    console.log(chalk.green.underline('Run Details:'))
    if (options.language)
      console.log(chalk['green']('language'), `- ${options.language}`)
    if (options.backend)
      console.log(chalk['green']('backend'), `- ${options.backend}`)
    if (options.mobile)
      console.log(chalk['green']('mobile'), `- ${options.mobile}`)
    if (options.entities)
      console.log(chalk['green']('entities'), `- ${options.entities}`)
    console.log('\n\n')
    // prettify()
  }
}

// async function main() {
//   const root = path.join(dirName, '../../temp/')
//   // const root = path.join(dirName, '../src/')
//   await Turboship.cleanse(root)
//   new Turboship(root)
// }

// main()
